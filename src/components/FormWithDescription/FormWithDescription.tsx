import "react-phone-number-input/style.css";
import { ReactNode, useState } from "react";
import { ButtonStyled, ButtonsPanel, FormStyled } from "./styled";

import { Mail, Phone, User } from "@worms/assets";
import { FlexWrapper } from "@worms/common/FlexWrapper";
import { Input } from "@worms/common/Input";

const reqExpEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const reqExpNumber = /^\+?\d+$/;

interface FormWithDescriptionProps {
  secondaryButon?: ReactNode;
  buttonText?: string;
}

export const FormWithDescription = (props: FormWithDescriptionProps) => {
  const { secondaryButon, buttonText = "Сделать заказ онлайн" } = props;

  const [fields, setFields] = useState({
    name: "",
    phone: "",
    description: "",
    email: "",
  });

  const [fieldsErrors, setFieldsErros] = useState<{
    name: string;
    phone: string;
    email: string;
  }>({
    name: "",
    phone: "",
    email: "",
  });

  const onChangeField =
    (field: "email" | "phone" | "name" | "description") => (value: string) => {
      if (field === "email") {
        if (!value.toLowerCase().match(reqExpEmail)) {
          setFieldsErros({
            ...fieldsErrors,
            email: "Некорректный email адрес",
          });
        } else {
          setFieldsErros({ ...fieldsErrors, email: "" });
        }
      }

      if (field === "phone") {
        if (!value.toLowerCase().match(reqExpNumber)) {
          setFieldsErros({
            ...fieldsErrors,
            phone: "Некорректный номер телефона",
          });
        } else {
          setFieldsErros({ ...fieldsErrors, phone: "" });
        }
      }

      setFields({ ...fields, [field]: value });
    };

  const onBlurField = (field: "email" | "phone" | "name") => () => {
    if (!fields[field].length) {
      setFieldsErros({ ...fieldsErrors, [field]: "Заполните поле" });
    }
  };

  return (
    <FormStyled>
      <FlexWrapper flexDirection="column" width="100%" gap="8px">
        <Input
          onChange={onChangeField("name")}
          error={fieldsErrors.name}
          value={fields.name}
          label="Имя"
          iconSrc={User}
          onBlur={onBlurField("name")}
        />
        <Input
          onChange={onChangeField("email")}
          error={fieldsErrors.email}
          value={fields.email}
          label="Email"
          iconSrc={Mail}
          onBlur={onBlurField("email")}
        />
        <Input
          onChange={onChangeField("phone")}
          error={fieldsErrors.phone}
          value={fields.phone}
          label="Телефон"
          iconSrc={Phone}
          onBlur={onBlurField("phone")}
        />
        <Input
          onChange={onChangeField("description")}
          error={""}
          value={fields.description}
          label="Комментарий"
          isTextArea
          isRequired={false}
        />
        <ButtonsPanel
          flexDirection="column"
          width="100%"
          gap="16px"
          flexWrap="nowrap"
          alignItems="center"
        >
          <ButtonStyled type="submit" text={buttonText} width={"100%"} />
          {secondaryButon && secondaryButon}
        </ButtonsPanel>
      </FlexWrapper>
    </FormStyled>
  );
};
