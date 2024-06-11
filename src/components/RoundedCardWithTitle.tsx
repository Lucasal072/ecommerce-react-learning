interface RoundedCardWithTitleProps {
  title: string;
}

export const RoundedCardWithTitle = ({ title }: RoundedCardWithTitleProps) => {
  return (
    <div className="flex items-center flex-col cursor-pointer">
      <div className="w-[140px] h-[140px] bg-[#F5F5F5] rounded-full flex items-center justify-center">
        <img
          className="w-[100px] h-[100px] object-cover"
          src="https://s3-alpha-sig.figma.com/img/d14e/d859/a913d4fe13f5ef0e3ab8e8e7f005f082?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gfnjF~d33IGFiCKGWB33TBza9B2kTJxTOChf1BSVMKYaD8ImskM3c~kVw6hU57YVlcOpDFXNoWl0YUnFR39IxPSw5QTb9HtmIC2PkOX5W~RMpNxzvLgRc8UH3D73m8ik3DpUDBU-k8248ui~-78WYfnLAU3mRXPooykpxBRMjjxQK-OlEf0l~bhu3GueCXaIURVFFZmoYJViEiqcGNbpBuSrMtLJikc3FgV42QLYblesK3D3v7iUYMpKpjeFuWs~gMNvvxd-ZwWz1kBdzmqFjtMrnx8TkGHPRlRp1A~2Fwt7Ly1xkX~cfyJY~18PI4NpHit7QcGr5hDEodJXVOXf5A__"
          alt={title}
        />
      </div>
      {title}
    </div>
  );
};
