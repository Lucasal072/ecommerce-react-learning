interface CardWithTitleProps {
  title: string;
}

export const CardWithTitle = ({ title }: CardWithTitleProps) => {
  return (
    <div className="flex flex-col cursor-pointer">
      <div className=" flex w-[170px] h-[170px] bg-[#F5F5F5] items-center rounded-lg">
        <img
          className="m-auto w-[170px] h-[120px] object-cover"
          src="https://s3-alpha-sig.figma.com/img/84ef/4761/d810ce7468c5e5780d068a3fac851f31?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AhjTUfZ3YZ9BEDYf-Hj0~JOIMGXVUK7aEzcD50IaNQhGFuTduJ~l4EiCJxaUoVapkmwF7ml7SK1Oa6N3oGG3kY4PZubrJE0yIeRE02G4Xku-od7ElaLsQsT8qsdskH~RUB17rrD6NYqP0HyWz3hGnQtSoAGzk~bR6TIf9S5~9Kc3buQcu1T8DnPLZWMDdaZVkZC5nJORIPmdosIhT7grN0mNqoFoaM83tpin7J9bGgKN6niTE4LlMWlNSv5YrNfiXvTBU0C19XDSJEDn6PYNe7bDMVY11ATw4t7Ylh~QUfLNVJJvXLSXKWL7hjTI4U8mC20n6URd5VFfGjshcHMRjg__"
          alt={title}
        />
      </div>
      <p>{title}</p>
      <strong>UP to 50% OFF</strong>
    </div>
  );
};
