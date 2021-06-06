import { useHistory } from "react-router-dom";

export const useHistoryRouter = () => {
    const history = useHistory()

    const goBack = () => {
        history.goBack();
    }

    return { goBack }
}
