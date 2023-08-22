import { Button } from "@chakra-ui/react";
import labels from "@constants/localization/breadcrumb/breadcrumb";
import useLang from "@hooks/useLanguage";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  const { lang } = useLang();

  return (
    <Button
      fontWeight={400}
      size="sm"
      variant="outline"
      colorScheme="telegram"
      onClick={() => {
        navigate(-1);
      }}
    >
      {labels?.goBack?.[lang]}
    </Button>
  );
};

export default BackButton;
