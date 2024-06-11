interface DiscountCardProps {
  discount: number;
  title: string;
  price: number;
  originalPrice: number;
  save: number;
}

export const DiscountCard = ({
  save,
  title,
  price,
  originalPrice,
  discount,
}: DiscountCardProps) => {
  return (
    <div className="w-[200px] h-[300px] rounded-lg border-[1px] border-[#EDEDED]">
      <div className="bg-[#F5F5F5] h-[180px] rounded-t-lg flex flex-row-reverse gap-3">
        <div className="bg-[#008ECC] h-[50px] w-[50px] rounded-se-lg rounded-es-lg flex items-center justify-center">
          <p className="text-[13px] text-white">
            {save}%<br />
            OFF
          </p>
        </div>
        <img
          className="w-[80px] h-[180px] object-cover"
          src="https://s3-alpha-sig.figma.com/img/d14e/d859/a913d4fe13f5ef0e3ab8e8e7f005f082?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gfnjF~d33IGFiCKGWB33TBza9B2kTJxTOChf1BSVMKYaD8ImskM3c~kVw6hU57YVlcOpDFXNoWl0YUnFR39IxPSw5QTb9HtmIC2PkOX5W~RMpNxzvLgRc8UH3D73m8ik3DpUDBU-k8248ui~-78WYfnLAU3mRXPooykpxBRMjjxQK-OlEf0l~bhu3GueCXaIURVFFZmoYJViEiqcGNbpBuSrMtLJikc3FgV42QLYblesK3D3v7iUYMpKpjeFuWs~gMNvvxd-ZwWz1kBdzmqFjtMrnx8TkGHPRlRp1A~2Fwt7Ly1xkX~cfyJY~18PI4NpHit7QcGr5hDEodJXVOXf5A__"
          alt={title}
        />
      </div>
      <div className="bg-[background: #FFFFFF]w-auto h-[50px] rounded-es-lg rounded-ee-lg ">
        <div className="flex justify-center items-start flex-col border-b-[2px] border-[#EDEDED] p-2">
          <p>{title} </p>
          <p className="flex gap-4 justify-start">
            ₹{price}
            <span className="line-through">₹{originalPrice}</span>
          </p>
        </div>
        <div className="flex items-center justify-start p-3 text-green-600">
          <p>Save - ₹{discount}</p>
        </div>
      </div>
    </div>
  );
};
