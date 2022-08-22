// import { Box, Container, Grid, styled, Button } from "@mui/material";
// import AppStore from "components/AppStore";
// import BazarIconButton from "components/BazarIconButton";
// import Image from "components/BazarImage";
// import { FlexBox } from "components/flex-box";
// import Facebook from "components/icons/Facebook";
// import Google from "components/icons/Google";
// import Instagram from "components/icons/Instagram";
// import Twitter from "components/icons/Twitter";
// import Youtube from "components/icons/Youtube";
// import { Paragraph } from "components/Typography";
// import Link from "next/link";
// const BASE_URL = process.env.BASE_URL

// // styled component
// const StyledLink = styled("a")(({ theme }) => ({
//   display: "block",
//   borderRadius: 4,
//   cursor: "pointer",
//   position: "relative",
//   padding: "0.3rem 0rem",
//   color: theme.palette.grey[500],
//   "&:hover": {
//     color: theme.palette.grey[100],
//   },
// }));

// const Footer = ({generalSetting}) => {
//   // const iconList = [
//   //   {
//   //     icon: Facebook,
//   //     url: generalSetting?.facebook,
//   //   },
//   //   {
//   //     icon: Twitter,
//   //     url: generalSetting?.instagram,
//   //   },
//   //   {
//   //     icon: Youtube,
//   //     url: generalSetting?.youtube,
//   //   },
//   //   {
//   //     icon: Google,
//   //     url: generalSetting?.google_plus,
//   //   },
//   //   {
//   //     icon: generalSetting?.Instagram,
//   //     url: generalSetting?.instagram,
//   //   },
//   // ];
//   return (
//     <footer>
//       <Box bgcolor="#0c0e30">
//         <Container
//           sx={{
//             p: "1rem",
//             color: "white",
//           }}
//         >
//           <Box py={10} overflow="hidden">
//             <Grid container spacing={3}>
//               <Grid item lg={4} md={6} sm={6} xs={12}>
//                 <Link href="/">
//                   <a>
//                     <Image mb={2.5}  src={`${BASE_URL}/public/${generalSetting?.logo}`} alt="logo" />
//                   </a>
//                 </Link>

//                 <Paragraph mb={2.5} color="grey.500">
//              {generalSetting?.description}
//                 </Paragraph>

//                 <AppStore />
//               </Grid>

//               <Grid item lg={2} md={6} sm={6} xs={12}>
//                 <Box
//                   fontSize="25px"
//                   fontWeight="600"
//                   mb={2.5}
//                   lineHeight="1"
//                   color="white"
//                 >
//                   About Us
//                 </Box>

//                 <div>
//                   {aboutLinks.map((item, ind) => (
//                     <Link href="/" key={ind} passHref>
//                       <StyledLink>{item}</StyledLink>
//                     </Link>
//                   ))}
//                 </div>
//               </Grid>

//               <Grid item lg={3} md={6} sm={6} xs={12}>
//                 <Box
//                   fontSize="25px"
//                   fontWeight="600"
//                   mb={2.5}
//                   lineHeight="1"
//                   color="white"
//                 >
//                   Customer Care
//                 </Box>

//                 <div>
//                   {customerCareLinks.map((item, ind) => (
//                     <Link href="/" key={ind} passHref>
//                       <StyledLink>{item}</StyledLink>
//                     </Link>
//                   ))}
//                 </div>
//               </Grid>

//               <Grid item lg={3} md={6} sm={6} xs={12}>
//                 <Box
//                   fontSize="25px"
//                   fontWeight="600"
//                   mb={2.5}
//                   lineHeight="1"
//                   color="white"
//                 >
//                   Contact Us
//                 </Box>
//                 <Box py={0.6} color="grey.500">
//                 {generalSetting?.address}
//                 </Box>
//                 <Box py={0.6} color="grey.500">
               
//                   Email:  {generalSetting?.email}
//                 </Box>
//                 <Box py={0.6} mb={2} color="grey.500">
//                   Phone:  {generalSetting?.phone}
//                 </Box>

//                 <FlexBox className="flex" mx={-0.625}>
//                   {iconList.map((item, ind) => (
//                     <a
//                       href={item.url}
//                       target="_blank"
//                       rel="noreferrer noopenner"
//                       key={ind}
//                     >
//                       <BazarIconButton
//                         m={0.5}
//                         bgcolor="rgba(0,0,0,0.2)"
//                         fontSize="12px"
//                         padding="10px"
//                       >
//                         <item.icon fontSize="inherit" />
//                       </BazarIconButton>
//                     </a>
//                   ))}
//                 </FlexBox>
//                 <Box
//                   fontSize="20px"
//                   fontWeight="500"
//                   mb={2.5}
//                   lineHeight="1"
//                   color="white"
//                 >
//                 Be A Seler
//                 </Box>
//                 <Button variant="contained" color="success">
//                    Apply here
//                 </Button>
//               </Grid>
//             </Grid>
//           </Box>
//         </Container>
//       </Box>
//     </footer>
//   );
// };

// const aboutLinks = [
//   "Careers",
//   "Our Stores",
//   "Our Cares",
//   "Terms & Conditions",
//   "Privacy Policy",
// ];
// const customerCareLinks = [
//   "Help Center",
//   "How to Buy",
//   "Track Your Order",
//   "Corporate & Bulk Purchasing",
//   "Returns & Refunds",
// ];
// const iconList = []

// export default Footer;
import React, {useState} from 'react'
import { Box, Container, Grid, styled, Button, Dialog} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import AppStore from "components/AppStore";
import BazarIconButton from "components/BazarIconButton";
import Image from "components/BazarImage";
import { FlexBox } from "components/flex-box";
import Facebook from "components/icons/Facebook";
import Google from "components/icons/Google";
import Instagram from "components/icons/Instagram";
import Twitter from "components/icons/Twitter";
import Youtube from "components/icons/Youtube";
import { Paragraph } from "components/Typography";
import Link from "next/link";
import SellerSignUp from "pages-sections/sessions/SellerSignUp";

const BASE_URL = process.env.BASE_URL

// styled component
const StyledLink = styled("a")(({ theme }) => ({
  display: "block",
  borderRadius: 4,
  cursor: "pointer",
  position: "relative",
  padding: "0.3rem 0rem",
  color: theme.palette.grey[500],
  "&:hover": {
    color: theme.palette.grey[100],
  },
}));

const Footer = ({generalSetting}) => {
  const theme = useTheme();
  const [dialogOpen, setDialogOpen] = useState(false);
  const toggleDialog = () => setDialogOpen(!dialogOpen);
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const downMd = useMediaQuery(theme.breakpoints.down(1150));


  return (
    <div>
    <footer>
      <Box bgcolor="#0c0e30">
        <Container
          sx={{
            p: "1rem",
            color: "white",
          }}
        >
          <Box py={10} overflow="hidden">
            <Grid container spacing={3}>
              <Grid item lg={4} md={6} sm={6} xs={12}>
                <Link href="/">
                  <a>
                    <Image mb={2.5}  src={`${BASE_URL}/public/${generalSetting?.logo}`} alt="logo" />
                  </a>
                </Link>

                <Paragraph mb={2.5} color="grey.500">
             {generalSetting?.description}
                </Paragraph>

                <AppStore />
              </Grid>

              <Grid item lg={2} md={6} sm={6} xs={12}>
                <Box
                  fontSize="25px"
                  fontWeight="600"
                  mb={2.5}
                  lineHeight="1"
                  color="white"
                >
                  About Us
                </Box>

                <div>
                  {aboutLinks.map((item, ind) => (
                    <Link href="/" key={ind} passHref>
                      <StyledLink>{item}</StyledLink>
                    </Link>
                  ))}
                </div>
              </Grid>

              <Grid item lg={3} md={6} sm={6} xs={12}>
                <Box
                  fontSize="25px"
                  fontWeight="600"
                  mb={2.5}
                  lineHeight="1"
                  color="white"
                >
                  Customer Care
                </Box>

                <div>
                  {customerCareLinks.map((item, ind) => (
                    <Link href="/" key={ind} passHref>
                      <StyledLink>{item}</StyledLink>
                    </Link>
                  ))}
                </div>
              </Grid>

              <Grid item lg={3} md={6} sm={6} xs={12}>
                <Box
                  fontSize="25px"
                  fontWeight="600"
                  mb={2.5}
                  lineHeight="1"
                  color="white"
                >
                  Contact Us
                </Box>
                <Box py={0.6} color="grey.500">
                {generalSetting?.address}
                </Box>
                <Box py={0.6} color="grey.500">
               
                  Email:  {generalSetting?.email}
                </Box>
                <Box py={0.6} mb={2} color="grey.500">
                  Phone:  {generalSetting?.phone}
                </Box>

                <FlexBox className="flex" mx={-0.625}>
                  {iconList.map((item, ind) => (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer noopenner"
                      key={ind}
                    >
                      <BazarIconButton
                        m={0.5}
                        bgcolor="rgba(0,0,0,0.2)"
                        fontSize="12px"
                        padding="10px"
                      >
                        <item.icon fontSize="inherit" />
                      </BazarIconButton>
                    </a>
                  ))}
                </FlexBox>
                <Box
                  fontSize="20px"
                  fontWeight="500"
                  mb={2.5}
                  lineHeight="1"
                  color="white"
                >
                Be A Seler
                </Box>
                <Button variant="contained" color="success" onClick={toggleDialog}>
                   Apply here
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </footer>


<Dialog
open={dialogOpen}
fullWidth={isMobile}
scroll="body"
onClose={toggleDialog}
>
<SellerSignUp />
</Dialog>
</div>
  );
};

const aboutLinks = [
  "Careers",
  "Our Stores",
  "Our Cares",
  "Terms & Conditions",
  "Privacy Policy",
];
const customerCareLinks = [
  "Help Center",
  "How to Buy",
  "Track Your Order",
  "Corporate & Bulk Purchasing",
  "Returns & Refunds",
];
const iconList = []

export default Footer;
