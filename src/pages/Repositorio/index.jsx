import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Loading, Owner, BackButton, IssuesList, PageActions } from "./styles";
import api from "../../services/api";
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa'

export default function Repositorio() {
    const { repositorio } = useParams();
    const [repositorioPag, setRepositorioPag] = useState({});
    const [issues, setIssues] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {


        async function load() {

            const [repositorioData, issuesData] = await Promise.all([
                api.get(`/repos/${repositorio}`),
                api.get(`/repos/${repositorio}/issues`, {
                    params:{
                        state: 'open',
                        per_page: 5
                    }
                })
            ]);

            setRepositorioPag(repositorioData.data);
            setIssues(issuesData.data);
            setLoading(false);
        }

        load();
    }, [repositorio]);

    useEffect(()=> {
        async function loadIssue() {
            
            const response = await api.get(`/repos/${repositorio}/issues`,
                {
                    params:{
                        state: 'open',
                        page,
                        per_page: 5,
                    }
                }
            )

            setIssues(response.data);
        }

        loadIssue();
    }, [page]);


    function handlePage(action){
        setPage(action === 'back' ? page - 1 : page + 1)
        
    }


    if(loading){
        return(
            <Loading>
                <h1>Carregando...</h1>
            </Loading>
        )
    }

    return (
        <Container>
            <BackButton to={"/"}>
                <FaArrowLeft color="#000" size={30} />
            </BackButton>
            <Owner>
                <img src={repositorioPag.owner.avatar_url} alt={repositorioPag.owner.login} />
                <h1>{repositorioPag.name}</h1>
                <p>{repositorioPag.description}</p>
            </Owner>
            <IssuesList>
                {issues.map(issue => (
                    <li key={String(issue.id)}>
                        <img src={issue.user.avatar_url} alt={issue.user.login} />

                        <div>
                            <strong>
                                <a href={issue.html_url}>{issue.title}</a>

                                {issue.labels.map(label => (
                                    <span key={String(label.id)}>{label.name}</span>
                                ))}
                            </strong>
                            <p>{issue.user.login}</p>
                        </div>
                    </li>
                ))}
            </IssuesList>

            <PageActions>
                <button disabled={page < 2} type="button" onClick={() => handlePage('back')}><FaArrowLeft /></button>
                <button type="button" onClick={() => handlePage('next')}><FaArrowRight /></button>
            </PageActions>
            <span>{page}</span>
        </Container>
    )
}