import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Loading, Owner, BackButton } from "./styles";
import api from "../../services/api";
import {FaArrowLeft} from 'react-icons/fa'

export default function Repositorio() {
    const { repositorio } = useParams();
    const [repositorioPag, setRepositorioPag] = useState({});
    const [issues, setIssues] = useState([]);
    const [loading, setLoading] = useState(true);

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
        </Container>
    )
}