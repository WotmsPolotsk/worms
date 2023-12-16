import { Input } from "../Input/Input";
import "react-phone-number-input/style.css";
import { useState } from "react";
import { FlexWrapper } from "../FlexWrapper";
import { ButtonStyled } from "./styled";
import Phone from "../../../assets/icons/phone.svg";
import User from "../../../assets/icons/user.svg";
import Mail from "../../../assets/icons/mail.svg";

export const Form = () => {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // const [fieldsErrors, setFieldsErros] = useState<{
  //   name: string | boolean;
  //   email: string | boolean;
  //   phone: string | boolean;
  // }>({
  //   name: "",
  //   email: "",
  //   phone: "",
  // });

  const onChangeField = (field: string) => (value: string) => {
    setFields({ ...fields, [field]: value });
  };

  return (
    <form>
      <FlexWrapper flexDirection="column" width="100%" gap="16px">
        <Input
          onChange={onChangeField("name")}
          value={fields.name}
          label="Имя"
          iconSrc={User}
        />
        <Input
          onChange={onChangeField("email")}
          value={fields.email}
          label="Email"
          iconSrc={Mail}
        />
        <Input
          onChange={onChangeField("phone")}
          value={fields.phone}
          label="Телефон"
          iconSrc={Phone}
        />
        <ButtonStyled text="Сделать заказ онлайн" width="100%" />
      </FlexWrapper>
    </form>
  );
};
