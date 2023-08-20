import {
  Fade,
  ScaleFade,
  Slide,
  SlideFade,
  Text,
  Collapse,
  Box,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
function CollapseEx() {
  const { isOpen, onToggle } = useDisclosure();
  const title = {
    fontSize: "20px",
    textAlign: "center",
    fontWeight: "bold",
    mb: "20px",
  };
  const subtitle = {
    fontWeight: "normal",
    fontSize: "14px",
    marginTop: "2px",
    textAlign: "center",
  };
  const description = {
    fontSize: "13px",
  };
  const objective = {
    fontSize: "13px",
    marginTop: "8px",
    textAlign: "center",
  };
  const list = {
    marginLeft: "22px",
  };
  const date = {
    textAlign: "right",
    fontSize: "14px",
    mt: "20px",
    color: "gray",
  };
  return (
    <>
      <Button colorScheme="teal" onClick={onToggle}>
        CLICK ME!
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <Box p="20px" color="black" bg="white" rounded="md" shadow="md">
          <Text {...title}>Pengalaman Organisasi</Text>
          <Text {...subtitle}>Himpunan Mahasiswa Teknik Informatika</Text>
          <Text {...subtitle}>Divisi Rumah Tangga</Text>
          {/* <Text {...objective}>Graduated with a GPA of 89/100.</Text> */}
          <Text {...date}>Jan 2019 - Dec 2019</Text>
        </Box>
      </Collapse>
    </>
  );
}
export default CollapseEx;
