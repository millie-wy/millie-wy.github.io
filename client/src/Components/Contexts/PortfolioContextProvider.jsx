import { createContext, useCallback, useContext, useState } from "react";

export const PortfolioContext = createContext({
  fetchPortfolio: () => Promise.resolve(),
  portfolio: [],
  isLoading: true,
  convertDate: () => {},
});

// proxy tested and working, this function to be fixed
const PortfolioProvider = (props) => {
  const [portfolio, setPortfolio] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPortfolio = useCallback(async () => {
    setIsLoading(true);
    let response = await fetch("/api/project", {
      method: "GET",
    });
    const result = await response.json();

    if (response.ok) {
      setPortfolio(result);
      setIsLoading(false);
    }
  }, []);

  const convertDate = (dateString) => {
    const month = dateString.split("/").shift();
    const year = dateString.split("/").pop();

    let date = new Date();
    date.setMonth(month - 1);
    date.setFullYear(year);
    date.setDate(1);
    return date;
  };

  return (
    <PortfolioContext.Provider
      value={{ fetchPortfolio, portfolio, isLoading, convertDate }}
    >
      {props.children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioProvider;
export const usePortfolio = () => useContext(PortfolioContext);
