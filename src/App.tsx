import ContainerWithTitle from "./components/ContainerWithTitle";
import Header from "./components/header";

import { RoundedCardWithTitle } from "./components/RoundedCardWithTitle";
import Carousel from "./components/Carousel";
import { CardWithTitle } from "./components/CardWithTitle";
import { DiscountCard } from "./components/DiscountCard";
import { Footer } from "./components/footer";
import { CarouselContainer } from "./components/CarouselContainer";

function App() {
  const cardsUrl: string[] = [
    "https://s3-alpha-sig.figma.com/img/84ef/4761/d810ce7468c5e5780d068a3fac851f31?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AhjTUfZ3YZ9BEDYf-Hj0~JOIMGXVUK7aEzcD50IaNQhGFuTduJ~l4EiCJxaUoVapkmwF7ml7SK1Oa6N3oGG3kY4PZubrJE0yIeRE02G4Xku-od7ElaLsQsT8qsdskH~RUB17rrD6NYqP0HyWz3hGnQtSoAGzk~bR6TIf9S5~9Kc3buQcu1T8DnPLZWMDdaZVkZC5nJORIPmdosIhT7grN0mNqoFoaM83tpin7J9bGgKN6niTE4LlMWlNSv5YrNfiXvTBU0C19XDSJEDn6PYNe7bDMVY11ATw4t7Ylh~QUfLNVJJvXLSXKWL7hjTI4U8mC20n6URd5VFfGjshcHMRjg__",

    "https://s3-alpha-sig.figma.com/img/d14e/d859/a913d4fe13f5ef0e3ab8e8e7f005f082?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gfnjF~d33IGFiCKGWB33TBza9B2kTJxTOChf1BSVMKYaD8ImskM3c~kVw6hU57YVlcOpDFXNoWl0YUnFR39IxPSw5QTb9HtmIC2PkOX5W~RMpNxzvLgRc8UH3D73m8ik3DpUDBU-k8248ui~-78WYfnLAU3mRXPooykpxBRMjjxQK-OlEf0l~bhu3GueCXaIURVFFZmoYJViEiqcGNbpBuSrMtLJikc3FgV42QLYblesK3D3v7iUYMpKpjeFuWs~gMNvvxd-ZwWz1kBdzmqFjtMrnx8TkGHPRlRp1A~2Fwt7Ly1xkX~cfyJY~18PI4NpHit7QcGr5hDEodJXVOXf5A__",
    "https://s3-alpha-sig.figma.com/img/f0c0/9379/745c2cc486f326929cc1b8f54c4ef1b6?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WLGHUVxol8KTWJrW7wImMVO7pcl1syIKn0TewDOIRtuvPCHfEWxNqpZlm~PZ5Jw395a4bXWMQW~7gq2Q7geS5R-BxFufsDtD-basmpcMbTPBcJUcmkXC0JecaDXFWHPAiK9UZm-N62zw6iKyFJosONy9y9iH-KibRwi~W9dzSUkuIkpzXQGnJiXt7~483WZNcldnC2n6Cp8GTNMlAtuJTE2pV514pcFdWyhF4nZNA6JwAbnlg~iEerSBwFke4VIcVnx~d-mxKcukLddIujaKqNowVn2f7YXv96LNNGJR4YOHrKIqrwP~KllntU26LUg~Symqrkjy0yyraxbl~h8CBA__",
  ];
  return (
    <div className="flex flex-col gap-10">
      <Header />
      <div className="px-[7.5rem] flex flex-col gap-10 p-[12px] ">
        <Carousel.Root
          intervalTime={2000}
          className="flex flex-row gap-5 w-full"
        >
          {cardsUrl.map((url, index) => (
            <Carousel.Item key={index} className="w-full">
              <CarouselContainer url={url} />
            </Carousel.Item>
          ))}
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
          children={cardsUrl}
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
