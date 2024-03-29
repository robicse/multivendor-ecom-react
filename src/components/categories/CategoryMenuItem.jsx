import { ChevronLeft, ChevronRight, Avatar} from "@mui/icons-material";
import { Box, MenuItem, styled } from "@mui/material";
import useSettings from "hooks/useSettings";
import Link from "next/link";
//styled component
const Wrapper = styled(Box)(({ theme }) => ({
  "& .category-dropdown-link": {
    height: 40,
    display: "flex",
    minWidth: "278px",
    cursor: "pointer",
    whiteSpace: "pre",
    padding: "0px 1rem",
    alignItems: "center",
    transition: "all 250ms ease-in-out",
    "& .title": {
      flexGrow: 1,
      paddingLeft: "0.75rem",
    },
  },
  "&:hover": {
    "& > .category-dropdown-link": {
      color: theme.palette.primary.main,
      background: theme.palette.primary.light,
    },
    "& > .mega-menu": {
      display: "block",
    },
  },
})); // =============================================================

// =============================================================
const CategoryMenuItem = (props) => {
  const { href, title, caret, children, ...rest } = props;
// console.log({href, title, caret, children, ...rest})
  // console.log( { href, title, caret, children, ...rest })
  const { settings } = useSettings();
  return (
    <Wrapper>
      <Link href={href} passHref>
        <MenuItem className="category-dropdown-link">
          {
            rest.icon && <img
            style={{height:'20px', width:"20px"}}
            src={`${rest.icon }`}
            // srcSet={`${rest.icon }?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={title}
            loading="lazy"
          />
          }
        
          {/* {rest.icon && <rest.icon fontSize="small" color="inherit" />} */}
          <span className="title">{title}</span>
          {caret &&
            (settings.direction === "ltr" ? (
              <ChevronRight fontSize="small" />
            ) : (
              <ChevronLeft fontSize="small" />
            ))}
        </MenuItem>
      </Link>

      {children}
    </Wrapper>
  );
};

CategoryMenuItem.defaultProps = {
  caret: true,
};
export default CategoryMenuItem;
