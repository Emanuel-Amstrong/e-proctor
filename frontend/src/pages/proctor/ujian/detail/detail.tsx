import { useRecoilValue } from "recoil";
import Button from "../../../../components/forms/Button";
import Breadcrumbs from "../../../../components/others/Breadcrumbs";
import NamaUjian from "../../../../components/others/NamaUjian";
import SidebarGuru, {
  NavbarEnum,
} from "../../../../components/sidebar/SidebarGuru";
import { detailQuizState } from "../../../../_state/quiz.state";
import Header from "../../questions-bank/header";
import TabsDetailUjianGuru from "./tabs";

export default function DetailUjianGuruIndex() {
  const detailQuiz = useRecoilValue(detailQuizState);

  return (
    // bg-[#EFF0F3]
    <div className="bg-[#EFF0F3] min-h-screen flex text-black">
      {/* SIDEBAR */}
      <SidebarGuru active={NavbarEnum.UJIANANDA} />

      {/* BUTTON BUAT UJIAN, CARI UJIAN(?), ICON NOTIFIKASI, DAN SETTINGS */}
      <div className="mr-[24px] w-full ml-6 pl-[240px]">
        <Header />
        <Breadcrumbs />
        <NamaUjian title={detailQuiz?.title} />
        <TabsDetailUjianGuru />

        <div className="text-black font-['Poppins'] mt-[30px] pb-[30px] bg-[#FBFCFC] rounded-[10px]">
          <div className="flex gap-[15px] ml-[20px] mr-[20px] pt-[20px] pb-[9px] border-b border-slate-300">
            <h1 className="font-semibold text-[14px] self-center ml-[20px]">
              {detailQuiz?.title}
            </h1>
          </div>
          <p className="font-['Roboto'] text-sm ml-[40px] mt-[20px] mr-[40px] leading-[200%]">
            {detailQuiz?.description}
          </p>
        </div>

        {/* <Link to={"/guru-tambahujian"}> */}
        <Button className="mt-[20px] mb-[30px]">
          <p className="text-xs">Edit Ujian</p>
        </Button>
        {/* </Link> */}

        <div className="flex justify-between mb-[30px]">
          {/* <SessionCard/> */}
          {/* <SessionCard/> */}
        </div>
      </div>
    </div>
  );
}
