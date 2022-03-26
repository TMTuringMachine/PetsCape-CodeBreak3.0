import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Flex, Box, Text } from "@chakra-ui/react";
import { styled } from "@mui/material";
import ImageButton from "../../components/image-button/imageButton.component";
import HostPreview from "../../components/host-preview/hostPreview.component";

export const BannerImage = styled("div")(({ url }) => ({
  width: "100%",
  height: "400px",
  backgroundImage: `url('${url}')`,
  backgroundPosition: "center",
  backgroundSize: "cover",
}));

const images = {
  pets: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
  plants:
    "https://images.unsplash.com/photo-1521334884684-d80222895322?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  all: "https://images.unsplash.com/photo-1629757349708-a9abe5d3d354?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
};

const hosts = [
  {
    name: "Emma Watson",
    profilePic:
      "https://images.unsplash.com/photo-1486583474878-b16d8f2749b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Jessica",
    profilePic:
      "https://images.unsplash.com/photo-1596076463549-b4d123456b6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Emma Watson",
    profilePic:
      "https://images.unsplash.com/photo-1486583474878-b16d8f2749b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Jessica",
    profilePic:
      "https://images.unsplash.com/photo-1596076463549-b4d123456b6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Emma Watson",
    profilePic:
      "https://images.unsplash.com/photo-1486583474878-b16d8f2749b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
];

const FilterHost = () => {
  const { type } = useParams();
  const [selectedFilters, setSelectedFilters] = useState({
    nearMe: false,
    topRated: false,
    economical: false,
  });

  return (
    <Flex direction="column" alignItems="center">
      <BannerImage url={images[type]} />
      <Box padding="20px" width="90%">
        <Text fontSize="2em" margin="10px 0 20px 0">
          Looking for someone to take care of your{" "}
          {type == "all" ? "pets or plants" : type}
        </Text>
        <Flex direction="row" width="100%" justifyContent="space-between">
          <ImageButton
            selected={selectedFilters.nearMe}
            url="https://images.unsplash.com/photo-1548345680-f5475ea5df84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
            onClick={() => {
              setSelectedFilters({
                ...selectedFilters,
                nearMe: !selectedFilters.nearMe,
              });
            }}
          >
            Near Me
          </ImageButton>
          <ImageButton
            selected={selectedFilters.topRated}
            url="https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            onClick={() => {
              setSelectedFilters({
                ...selectedFilters,
                topRated: !selectedFilters.topRated,
              });
            }}
          >
            Top rated
          </ImageButton>
          <ImageButton
            selected={selectedFilters.economical}
            url="https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            onClick={() => {
              setSelectedFilters({
                ...selectedFilters,
                economical: !selectedFilters.economical,
              });
            }}
          >
            Most economical
          </ImageButton>
        </Flex>
      </Box>
      <Box padding="20px" width="90%">
        <Text fontSize="2em" margin="10px 0 20px 0">
          43 Results matching your filters{" "}
        </Text>
        <Flex direction="column">
          {hosts.map((host) => (
            <HostPreview host={host} />
          ))}
        </Flex>
      </Box>
      <Box height="100px"></Box>
    </Flex>
  );
};

export default FilterHost;