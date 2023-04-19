import { memo, VFC } from "react";
import { Box, Flex, Heading, Image, Stack } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { pharmacyImage } from "lib/imageLink";
import { Pharmacy } from "types/pharmacy";

type Props = {
  nearPharmacies: Array<Pharmacy | null>;
  onClick: (id: number | undefined) => void;
};

export const NearPharmacy: VFC<Props> = memo((props) => {
  const { nearPharmacies, onClick } = props;

  const settings = {
    swipe: true,
    touchMove: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    adaptiveHeight: true,
    accessibility: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <>
      <Box bg="orange.50" mt={100} boxShadow="md">
        <Box mb={3} justifyContent="center">
          <Heading size="md" m={30} pt={5}>
            〜 この薬局の周辺にある薬局 〜
          </Heading>
          <Slider {...settings}>
            {nearPharmacies &&
              nearPharmacies.map((pharmacy) => (
                <Box key={pharmacy?.id} p={5}>
                  <Box _hover={{ opacity: 0.8, cursor: "pointer" }} onClick={() => onClick(pharmacy?.id)}>
                    <Stack spacing={5} pb={2}>
                      <Flex justify="center">
                        <Image src={pharmacyImage} w="100px" />
                      </Flex>
                      <Heading textAlign="center" fontSize={{ base: "xs", md: "sm" }}>
                        {pharmacy?.name}
                      </Heading>
                    </Stack>
                  </Box>
                </Box>
              ))}
          </Slider>
        </Box>
      </Box>
    </>
  );
});
