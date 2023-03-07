import { BiEnvelope, BiLock } from "react-icons/bi";
import { FormControl, FormGroup, FormHorizontal, FormLabel, FormSubmit, FormTitle, FormUserProfile } from "../../styles/Form";
import { WrapperLogin } from "./styles";

export default function Login() {
  return (
    <>
      <WrapperLogin>
        <FormHorizontal>
          <FormUserProfile>
            <img src="https://media.discordapp.net/attachments/1013165623188148234/1079928421058097303/WhatsApp_Image_2023-02-27_at_08.58.33_1.jpeg?width=420&height=566" alt="" />
            <span>Welcome back Vinicius!</span>
          </FormUserProfile>
          <FormTitle>Login</FormTitle>

          <FormGroup>
            <FormLabel><BiEnvelope /></FormLabel>
            <FormControl type="text" placeholder="E-mail" />
          </FormGroup>
          <FormGroup>
            <FormLabel><BiLock /></FormLabel>
            <FormControl type="password" placeholder="Password" />
          </FormGroup>
          <FormGroup>
            <FormSubmit>Submit</FormSubmit>
          </FormGroup>
        </FormHorizontal>
      </WrapperLogin>
    </>
  )
}