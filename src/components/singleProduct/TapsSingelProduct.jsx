import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Willlovetoo from "./Willlovetoo";
import DescriptionSingelTour from "./DescriptionSingelTour";
import AdditionalInformation from "./AdditionalInformation";

export default function TapsSingelProduct({ locale }) {
  return (
    <Tabs defaultValue=" Description " className=" mt-10 ">
      <TabsList className="grid w-full  grid-cols-1 gap-2 md:gap-2 md:grid-cols-5  rounded-none border-b !p-0  bg-transparent">
        <div className="hidden md:block"></div>
        <TabsTrigger
          className={
            "rounded-none  data-[state=active]:bg-bsMainBrown bg-[#f4f4f4] data-[state=active]:text-white text-xl font-bold"
          }
          value=" Description "
        >
          Description
        </TabsTrigger>
        <TabsTrigger
          className={
            "rounded-none  data-[state=active]:bg-bsMainBrown bg-[#f4f4f4] data-[state=active]:text-white text-xl font-bold"
          }
          value="Additional_information"
        >
          Additional information
        </TabsTrigger>
        <TabsTrigger
          className={
            "rounded-none  data-[state=active]:bg-bsMainBrown bg-[#f4f4f4] data-[state=active]:text-white text-xl font-bold"
          }
          value="Willlovetoo"
        >
          Will love too
        </TabsTrigger>
        <div className="hidden md:block"></div>
      </TabsList>
      <TabsContent className={"pt-20 md:pt-0"} value=" Description ">
        <DescriptionSingelTour locale={locale} />
      </TabsContent>
      <TabsContent className={"pt-20 md:pt-0"} value="Additional_information">
        <AdditionalInformation locale={locale} />
      </TabsContent>
      <TabsContent className={"pt-20 md:pt-0"} value="Willlovetoo">
        <Willlovetoo locale={locale} />
      </TabsContent>
    </Tabs>
  );
}
