import ContainerWithTitle from "../components/ContainerWithTitle";
import Header from "../components/header";

import { RoundedCardWithTitle } from "../components/RoundedCardWithTitle";
import { CardWithTitle } from "../components/CardWithTitle";
import { DiscountCard } from "../components/DiscountCard";
import { Footer } from "../components/footer";
import { CarouselContainer } from "../components/CarouselContainer";
import Carousel from "../components/carousel";
import { CarouselItem } from "../components/CarouselItem";

function App() {
  const cardsUrl: string[] = [
    "https://s3-alpha-sig.figma.com/img/84ef/4761/d810ce7468c5e5780d068a3fac851f31?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AhjTUfZ3YZ9BEDYf-Hj0~JOIMGXVUK7aEzcD50IaNQhGFuTduJ~l4EiCJxaUoVapkmwF7ml7SK1Oa6N3oGG3kY4PZubrJE0yIeRE02G4Xku-od7ElaLsQsT8qsdskH~RUB17rrD6NYqP0HyWz3hGnQtSoAGzk~bR6TIf9S5~9Kc3buQcu1T8DnPLZWMDdaZVkZC5nJORIPmdosIhT7grN0mNqoFoaM83tpin7J9bGgKN6niTE4LlMWlNSv5YrNfiXvTBU0C19XDSJEDn6PYNe7bDMVY11ATw4t7Ylh~QUfLNVJJvXLSXKWL7hjTI4U8mC20n6URd5VFfGjshcHMRjg__",

    "https://s3-alpha-sig.figma.com/img/d14e/d859/a913d4fe13f5ef0e3ab8e8e7f005f082?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gfnjF~d33IGFiCKGWB33TBza9B2kTJxTOChf1BSVMKYaD8ImskM3c~kVw6hU57YVlcOpDFXNoWl0YUnFR39IxPSw5QTb9HtmIC2PkOX5W~RMpNxzvLgRc8UH3D73m8ik3DpUDBU-k8248ui~-78WYfnLAU3mRXPooykpxBRMjjxQK-OlEf0l~bhu3GueCXaIURVFFZmoYJViEiqcGNbpBuSrMtLJikc3FgV42QLYblesK3D3v7iUYMpKpjeFuWs~gMNvvxd-ZwWz1kBdzmqFjtMrnx8TkGHPRlRp1A~2Fwt7Ly1xkX~cfyJY~18PI4NpHit7QcGr5hDEodJXVOXf5A__",
    "https://s3-alpha-sig.figma.com/img/f0c0/9379/745c2cc486f326929cc1b8f54c4ef1b6?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WLGHUVxol8KTWJrW7wImMVO7pcl1syIKn0TewDOIRtuvPCHfEWxNqpZlm~PZ5Jw395a4bXWMQW~7gq2Q7geS5R-BxFufsDtD-basmpcMbTPBcJUcmkXC0JecaDXFWHPAiK9UZm-N62zw6iKyFJosONy9y9iH-KibRwi~W9dzSUkuIkpzXQGnJiXt7~483WZNcldnC2n6Cp8GTNMlAtuJTE2pV514pcFdWyhF4nZNA6JwAbnlg~iEerSBwFke4VIcVnx~d-mxKcukLddIujaKqNowVn2f7YXv96LNNGJR4YOHrKIqrwP~KllntU26LUg~Symqrkjy0yyraxbl~h8CBA__",
  ];

  const logosUrl: string[] = [
    "https://cdn.discordapp.com/attachments/1012507236804857889/1250287563806216212/image.png?ex=666a6488&is=66691308&hm=751e27f0b290e5ec638aaeca3814a5c24bad014e7437295ec2cefa5a09eecff1&",
    "https://cdn.discordapp.com/attachments/1012507236804857889/1250287336223145994/image.png?ex=666a6452&is=666912d2&hm=7eb90afa7f7efb34321c58753cbb431e09d062da83361a1ea02a377cd27ff584&",
    "https://cdn.discordapp.com/attachments/1012507236804857889/1250287580579233895/image.png?ex=666a648c&is=6669130c&hm=16b93acb1542a7f19fb0b6837d41e3deef38d6dcfb3fae66693583c2edc68a39&",
  ];
  const cardsUrl2: string[] = [
    "https://s3-alpha-sig.figma.com/img/9546/03ea/61eccec3afecbe916c242c4460169441?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iV9KjkjIq4MrPj4pwKFn6rIONEcS3SG~AvuMV6FHDjC0YyooXz0ldM86yXEzjx7cmP6qmkngTy4gKrYZtq9OAjLq1eu4E3igJYq1zzRXLVgKIwFwBFJDlprcL94VwKRllzh2qUNZ4-Vuaq3Re67I1Hha6AD5GBEbWEfKh3TtmaAhWVOTQOzo50z3x2jvVQB-CJYR9dGa~pnEAo7GokkMVFR0CcuUxNL~anZ66w-k-15Qq6-ySsxFMELct9EEBm6WjD43NRic~I~FT4JDsDU8Syg6FDImgdlqAqay0A6kikZkqWStAHQXabckD5jLmulzNu9Y~jByl1x13QMeTlzonw__",
    "https://s3-alpha-sig.figma.com/img/2bfd/ce2a/2dd63a5fa5329f74bea440064b616294?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cy4jkJxQ34B016YJlVy8Olp7yQPcoYcJPl8PxQDYx6PJB~6Ga8ZGpkNeij7vCSfpPHPTup7W16RfGLtHxJfby8c8~2VkXtezIvC6~FEfYaabBpnEiqL~EH2NP9S0IAhoN5Teh7zIV3ncSD0dBD8ui~F5pu-cGDQh-S9Kig9KOlGETPZbBlt-1vSFuCfB9JvuvSzAABtnhuApS3-Dy1Q4S4DphG67cSZue~q4KzDcpzsFLrnFswH-DaK3i8lbsPVUdpzM0lWO1H2jnE1xZ5yX5zTH2H-5iCbpL8IH2O1Mf200CVAmjdY3rIfH~uEWiXyDcVbw9KleyJHL7qO9sqVpGQ__",
    "https://s3-alpha-sig.figma.com/img/d14e/d859/a913d4fe13f5ef0e3ab8e8e7f005f082?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gfnjF~d33IGFiCKGWB33TBza9B2kTJxTOChf1BSVMKYaD8ImskM3c~kVw6hU57YVlcOpDFXNoWl0YUnFR39IxPSw5QTb9HtmIC2PkOX5W~RMpNxzvLgRc8UH3D73m8ik3DpUDBU-k8248ui~-78WYfnLAU3mRXPooykpxBRMjjxQK-OlEf0l~bhu3GueCXaIURVFFZmoYJViEiqcGNbpBuSrMtLJikc3FgV42QLYblesK3D3v7iUYMpKpjeFuWs~gMNvvxd-ZwWz1kBdzmqFjtMrnx8TkGHPRlRp1A~2Fwt7Ly1xkX~cfyJY~18PI4NpHit7QcGr5hDEodJXVOXf5A__",
    "https://s3-alpha-sig.figma.com/img/d14e/d859/a913d4fe13f5ef0e3ab8e8e7f005f082?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gfnjF~d33IGFiCKGWB33TBza9B2kTJxTOChf1BSVMKYaD8ImskM3c~kVw6hU57YVlcOpDFXNoWl0YUnFR39IxPSw5QTb9HtmIC2PkOX5W~RMpNxzvLgRc8UH3D73m8ik3DpUDBU-k8248ui~-78WYfnLAU3mRXPooykpxBRMjjxQK-OlEf0l~bhu3GueCXaIURVFFZmoYJViEiqcGNbpBuSrMtLJikc3FgV42QLYblesK3D3v7iUYMpKpjeFuWs~gMNvvxd-ZwWz1kBdzmqFjtMrnx8TkGHPRlRp1A~2Fwt7Ly1xkX~cfyJY~18PI4NpHit7QcGr5hDEodJXVOXf5A__",
    "https://s3-alpha-sig.figma.com/img/d14e/d859/a913d4fe13f5ef0e3ab8e8e7f005f082?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gfnjF~d33IGFiCKGWB33TBza9B2kTJxTOChf1BSVMKYaD8ImskM3c~kVw6hU57YVlcOpDFXNoWl0YUnFR39IxPSw5QTb9HtmIC2PkOX5W~RMpNxzvLgRc8UH3D73m8ik3DpUDBU-k8248ui~-78WYfnLAU3mRXPooykpxBRMjjxQK-OlEf0l~bhu3GueCXaIURVFFZmoYJViEiqcGNbpBuSrMtLJikc3FgV42QLYblesK3D3v7iUYMpKpjeFuWs~gMNvvxd-ZwWz1kBdzmqFjtMrnx8TkGHPRlRp1A~2Fwt7Ly1xkX~cfyJY~18PI4NpHit7QcGr5hDEodJXVOXf5A__",
    "https://s3-alpha-sig.figma.com/img/d14e/d859/a913d4fe13f5ef0e3ab8e8e7f005f082?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gfnjF~d33IGFiCKGWB33TBza9B2kTJxTOChf1BSVMKYaD8ImskM3c~kVw6hU57YVlcOpDFXNoWl0YUnFR39IxPSw5QTb9HtmIC2PkOX5W~RMpNxzvLgRc8UH3D73m8ik3DpUDBU-k8248ui~-78WYfnLAU3mRXPooykpxBRMjjxQK-OlEf0l~bhu3GueCXaIURVFFZmoYJViEiqcGNbpBuSrMtLJikc3FgV42QLYblesK3D3v7iUYMpKpjeFuWs~gMNvvxd-ZwWz1kBdzmqFjtMrnx8TkGHPRlRp1A~2Fwt7Ly1xkX~cfyJY~18PI4NpHit7QcGr5hDEodJXVOXf5A__",
    "https://s3-alpha-sig.figma.com/img/d14e/d859/a913d4fe13f5ef0e3ab8e8e7f005f082?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gfnjF~d33IGFiCKGWB33TBza9B2kTJxTOChf1BSVMKYaD8ImskM3c~kVw6hU57YVlcOpDFXNoWl0YUnFR39IxPSw5QTb9HtmIC2PkOX5W~RMpNxzvLgRc8UH3D73m8ik3DpUDBU-k8248ui~-78WYfnLAU3mRXPooykpxBRMjjxQK-OlEf0l~bhu3GueCXaIURVFFZmoYJViEiqcGNbpBuSrMtLJikc3FgV42QLYblesK3D3v7iUYMpKpjeFuWs~gMNvvxd-ZwWz1kBdzmqFjtMrnx8TkGHPRlRp1A~2Fwt7Ly1xkX~cfyJY~18PI4NpHit7QcGr5hDEodJXVOXf5A__",
    "https://s3-alpha-sig.figma.com/img/d14e/d859/a913d4fe13f5ef0e3ab8e8e7f005f082?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gfnjF~d33IGFiCKGWB33TBza9B2kTJxTOChf1BSVMKYaD8ImskM3c~kVw6hU57YVlcOpDFXNoWl0YUnFR39IxPSw5QTb9HtmIC2PkOX5W~RMpNxzvLgRc8UH3D73m8ik3DpUDBU-k8248ui~-78WYfnLAU3mRXPooykpxBRMjjxQK-OlEf0l~bhu3GueCXaIURVFFZmoYJViEiqcGNbpBuSrMtLJikc3FgV42QLYblesK3D3v7iUYMpKpjeFuWs~gMNvvxd-ZwWz1kBdzmqFjtMrnx8TkGHPRlRp1A~2Fwt7Ly1xkX~cfyJY~18PI4NpHit7QcGr5hDEodJXVOXf5A__",
    "https://s3-alpha-sig.figma.com/img/d14e/d859/a913d4fe13f5ef0e3ab8e8e7f005f082?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gfnjF~d33IGFiCKGWB33TBza9B2kTJxTOChf1BSVMKYaD8ImskM3c~kVw6hU57YVlcOpDFXNoWl0YUnFR39IxPSw5QTb9HtmIC2PkOX5W~RMpNxzvLgRc8UH3D73m8ik3DpUDBU-k8248ui~-78WYfnLAU3mRXPooykpxBRMjjxQK-OlEf0l~bhu3GueCXaIURVFFZmoYJViEiqcGNbpBuSrMtLJikc3FgV42QLYblesK3D3v7iUYMpKpjeFuWs~gMNvvxd-ZwWz1kBdzmqFjtMrnx8TkGHPRlRp1A~2Fwt7Ly1xkX~cfyJY~18PI4NpHit7QcGr5hDEodJXVOXf5A__",
    "https://s3-alpha-sig.figma.com/img/d14e/d859/a913d4fe13f5ef0e3ab8e8e7f005f082?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gfnjF~d33IGFiCKGWB33TBza9B2kTJxTOChf1BSVMKYaD8ImskM3c~kVw6hU57YVlcOpDFXNoWl0YUnFR39IxPSw5QTb9HtmIC2PkOX5W~RMpNxzvLgRc8UH3D73m8ik3DpUDBU-k8248ui~-78WYfnLAU3mRXPooykpxBRMjjxQK-OlEf0l~bhu3GueCXaIURVFFZmoYJViEiqcGNbpBuSrMtLJikc3FgV42QLYblesK3D3v7iUYMpKpjeFuWs~gMNvvxd-ZwWz1kBdzmqFjtMrnx8TkGHPRlRp1A~2Fwt7Ly1xkX~cfyJY~18PI4NpHit7QcGr5hDEodJXVOXf5A__",
    "https://s3-alpha-sig.figma.com/img/d14e/d859/a913d4fe13f5ef0e3ab8e8e7f005f082?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gfnjF~d33IGFiCKGWB33TBza9B2kTJxTOChf1BSVMKYaD8ImskM3c~kVw6hU57YVlcOpDFXNoWl0YUnFR39IxPSw5QTb9HtmIC2PkOX5W~RMpNxzvLgRc8UH3D73m8ik3DpUDBU-k8248ui~-78WYfnLAU3mRXPooykpxBRMjjxQK-OlEf0l~bhu3GueCXaIURVFFZmoYJViEiqcGNbpBuSrMtLJikc3FgV42QLYblesK3D3v7iUYMpKpjeFuWs~gMNvvxd-ZwWz1kBdzmqFjtMrnx8TkGHPRlRp1A~2Fwt7Ly1xkX~cfyJY~18PI4NpHit7QcGr5hDEodJXVOXf5A__",
    "https://s3-alpha-sig.figma.com/img/d14e/d859/a913d4fe13f5ef0e3ab8e8e7f005f082?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gfnjF~d33IGFiCKGWB33TBza9B2kTJxTOChf1BSVMKYaD8ImskM3c~kVw6hU57YVlcOpDFXNoWl0YUnFR39IxPSw5QTb9HtmIC2PkOX5W~RMpNxzvLgRc8UH3D73m8ik3DpUDBU-k8248ui~-78WYfnLAU3mRXPooykpxBRMjjxQK-OlEf0l~bhu3GueCXaIURVFFZmoYJViEiqcGNbpBuSrMtLJikc3FgV42QLYblesK3D3v7iUYMpKpjeFuWs~gMNvvxd-ZwWz1kBdzmqFjtMrnx8TkGHPRlRp1A~2Fwt7Ly1xkX~cfyJY~18PI4NpHit7QcGr5hDEodJXVOXf5A__",
  ];
  return (
    <div className="flex flex-col gap-10">
      <Header />
      <div className="px-[7.5rem] flex flex-col gap-10 p-[12px] ">
        <Carousel.Root
          elementLengthForPagination={1}
          intervalTime={1000}
          className="flex flex-row gap-5 w-full"
        >
          <Carousel.Box className="w-full">
            {cardsUrl.map((url, index) => (
              <CarouselContainer url={url} key={index} />
            ))}
          </Carousel.Box>
        </Carousel.Root>
        <ContainerWithTitle
          title="Grab the best deal on Smartphones"
          children={[
            <DiscountCard
              discount={1000}
              save={56}
              title="Galaxy S22 Ultra"
              originalPrice={74999}
              price={32999}
            />,
            <DiscountCard
              discount={1000}
              save={56}
              title="Galaxy S22 Ultra"
              originalPrice={74999}
              price={32999}
            />,
            <DiscountCard
              discount={1000}
              save={56}
              title="Galaxy S22 Ultra"
              originalPrice={74999}
              price={32999}
            />,
            <DiscountCard
              discount={1000}
              save={56}
              title="Galaxy S22 Ultra"
              originalPrice={74999}
              price={32999}
            />,
            <DiscountCard
              discount={1000}
              save={56}
              title="Galaxy S22 Ultra"
              originalPrice={74999}
              price={32999}
            />,
          ]}
        />
        <ContainerWithTitle
          title="Shop From Top Categories"
          children={[
            <RoundedCardWithTitle title="teste" />,
            <RoundedCardWithTitle title="teste" />,
            <RoundedCardWithTitle title="teste" />,
            <RoundedCardWithTitle title="teste" />,
            <RoundedCardWithTitle title="teste" />,
            <RoundedCardWithTitle title="teste" />,
            <RoundedCardWithTitle title="teste" />,
          ]}
        />

        <ContainerWithTitle
          title="Top Electronics Brands"
          children={
            <Carousel.Root
              elementLengthForPagination={3}
              intervalTime={1000}
              className="flex flex-col gap-5 w-full items-center"
            >
              <Carousel.Box className="w-full flex flex-row">
                {cardsUrl2.map((url, index) => (
                  <CarouselItem
                    color="#313131"
                    productUrl={url}
                    key={index}
                    logoUrl={logosUrl[index]}
                    title="IPHONE"
                    description="UP to 80% OFF"
                  />
                ))}
              </Carousel.Box>
              <Carousel.Pagination />
            </Carousel.Root>
          }
        />
        <ContainerWithTitle
          title="Daily Essentials"
          children={[
            <CardWithTitle title="Daily Essentials" />,
            <CardWithTitle title="Vegitables" />,
            <CardWithTitle title="Fruits" />,
            <CardWithTitle title="Strowberry" />,
            <CardWithTitle title="Mango" />,
            <CardWithTitle title="Cherry" />,
          ]}
        />
      </div>

      <Footer />
    </div>
  );
}

export default App;
