import { RecruitHero } from "./RecruitHero/RecruitHero";
import { Box, Container } from "@mui/system";
import { JoinUs } from "./JoinUs/JoinUs";
import { Education } from "./Education/Education";

export const RecruitmentPartners = () => {
  return (
    <>
      <RecruitHero
        heroTitle="Your Success is Our Success – We’re Here to See You Grow"
        heroText="ApplyBoard is more than a platform. It’s your trusted partner to help you do what you do best: help as many students as possible fulfill their international education dreams."
        herotBtn="Partner with us"
      />
      <Education />
      <JoinUs />
    </>
  );
};
