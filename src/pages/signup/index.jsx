import { MdPerson, MdEmail, MdLock } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services/api";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Column, Container, LoginText, Row, SignUpText, SubTitleSignUp, Title, TitleSignUp, Wrapper } from "./styles";

const schema = yup.object({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().email("Digite um e-mail válido").required("Campo obrigatório"),
    password: yup.string().min(3, "No minimo 3 caracteres").required("Campo obrigatório"),
}).required();

const SignUp = () => {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors }} = useForm({ 
        resolver: yupResolver(schema), 
        mode: 'onChange',
    });

    const handleRegister = async (formData) => {
        try{

            const { data: users } = await api.get("users");

            const userExists = users.find(
                (users) => users.email === formData.email
            );

            if (userExists) {
                alert("Já existe um usuário com esse email!");
                return;
            }

            await api.post("users", {
                name: formData.name,
                email: formData.email,
                senha: formData.password
            });

            alert("Usuário cadastrado com sucesso!");
            navigate("/");
        } catch (error) {
            console.error(error);
            alert("Erro ao cadastrar usuário");
        }
    };

    const handleClickSignIn = () => {
        navigate('/login')
    }


    return (<>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias 
                    e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleSignUp>Comece agora grátis</TitleSignUp>
                    <SubTitleSignUp>Crie sua conta e make the change._</SubTitleSignUp>
                    <form onSubmit={handleSubmit(handleRegister)}>
                        <Input name="name" errorMessage={errors?.name?.message} control={control} placeholder="Nome completo" leftIcon={<MdPerson />} />
                        <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail />} />
                        <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock />} />
                        <Button title="Criar minha conta" variant="secondary" type="submit" />
                    </form>
                    <Row>
                        <SignUpText>
                            Ao clicar em "criar minha conta grátis", 
                            declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                        </SignUpText>
                    </Row>
                    <Row>
                        <SignUpText>
                            <strong>Já tenho conta.</strong>
                            <LoginText onClick={handleClickSignIn}>Fazer login</LoginText>
                        </SignUpText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { SignUp }