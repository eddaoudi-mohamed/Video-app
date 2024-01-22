import { FC, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
interface Iprops {}

const SearchBar: FC<Iprops> = ({}) => {
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState("");
  const handlerEnter = (e: any) => {
    e.preventDefault();
    if (searchValue != "") {
      return navigate(`search/${searchValue}`);
    }
    return navigate("/");
  };
  return (
    <>
      <div className=" flex flex-row justify-between items-center bg-zinc-950 rounded-full  border-white px-3 py-2 shadow-sm shadow-slate-200">
        <form action="" onSubmit={(e) => handlerEnter(e)}>
          <input
            type="text"
            //   value={""}
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            placeholder="search..."
            className="search-bar bg-transparent text-neutral-300"
          />
          <SearchIcon className=" text-neutral-300" />
        </form>
      </div>
    </>
  );
};

export default SearchBar;
