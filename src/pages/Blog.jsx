import React from "react";

import { motion } from "framer-motion";
import b1 from "/b1.jpg";
import b2 from "/b2.jpg";
import ua from "/ua.jpg";
import wall from "/so.jpg";
import ModalComponent from "../components/Modal";

const Kard = ({ date, title, summary, img, blog }) => {
  return (
    <motion.article
      className=" w-full flex items-center justify-between border border-solid border-dark bg-light shadow-xl 
       lg:flex-col lg:p-8 xs:rounded-2xl xs:p-1 sm:p-2 hover:shadow-2xl my-10 "
      initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <a
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
        href={""}
        target=" _blank"
      >
        <img src={img} alt={title} className=" w-full h-80" />
      </a>
      <div className=" w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-2">
        <div className=" w-full">
        <span className=" float-right text-[#dd9445] bg-orange-950 p-4">{date}</span>
        </div>
       

        <h2 className="my-2 w-full text-left text-xl text-[#dd9445] font-bold sm:text-sm">
          {title}
        </h2>

        <p className=" my-2 font-medium text-dark">{summary}</p>
        <div className=" mt-2 flex flex-row items-center gap-4">
          <ModalComponent title={title} descr={blog} />
        </div>
      </div>
    </motion.article>
  );
};

export default function Blog() {
  return (
    <section className=" bg-white p-6 text-black ">
        <div className="grid grid-cols-8 sm:grid-cols-1 gap-4">
            <div className=" col-start-2 sm:col-start-1 sm:col-span-1 col-span-4">
            <img src={wall} className=" w-full h-full" />
            </div>
            <div className=" col-start-6 sm:col-start-1 sm:col-span-1 col-span-3 py-7 content-end justify-center text-center">
                <h4>Sheltering Hearts, Embracing Dreams, Building Futures</h4>
            </div>
        </div>
        <hr className="h-px mt-24 sm:mt-14 bg-gray-200 border-0 w-3/4 mx-auto dark:bg-gray-700"/>
      <div class="grid grid-cols-6 gap-4">
        <div class="col-start-2 col-span-4 my-10">
          <Kard
          date={`13 May 2020`}
            title={"CREATING AWARENESS, NURTURING TALENTS"}
            summary="The Umundu Artivism is a creation of the vision bearer, Miss Lynnet Wawira. The term Umundu means being Humane which is a Native term origina..."
            img={ua}
            blog={
              <section className=" font-light">
                <p>
                  The Umundu Artivism is a creation of the vision bearer, Miss
                  Lynnet Wawira. The term Umundu means being Humane which is a
                  Native term originating from the Embu Community. Miss Lynnet
                  Wawira has always felt the need to use art to communicate
                  powerful messages to the society. \n Being a creative, she
                  discovered that she could use films, photography, stage plays,
                  music bands, drawings, Paintings, and Blogs among other
                  creative media to spread messages of awareness. According to
                  Miss Lynnet Wawira, the society needs healing from the
                  following; <br />
                  <br />
                  All forms of Gender based violence. <br />
                  Police brutality. <br />
                  Youth Unemployment. <br />
                  Discrimination of women and Persons Living with Disabilities.
                  <br />
                  …and many other injustices which keep emerging. <br />
                  <br />
                  Through the creative content produced by The Umundu Artivism,
                  we will educate on how and where one may find help when they
                  fall victim of the above social injustices. The content will
                  be used to highlight the above injustices in their purest form
                  without trying to sugar coat anything for the purpose of
                  alerting the community. The Umundu Artivism will work with the
                  criminal justice system, the healthcare sector, the education
                  sector, the legal sector, and other organizations (both
                  governmental and non-governmental) to fight against the
                  mentioned social injustices. The Umundu Artivism will have its
                  eyes on the talents identified while creating the awareness.
                  We will act as mentors and a linkage of the identified talents
                  to other prominent bodies and sectors that require their
                  talents such as the broader film industry in Kenya. We Look
                  Forward to Interacting With You (the Reader) as We Create
                  Awareness and Nurture Talents.
                </p>
              </section>
            }
          />
          <Kard
          date={`4 May 2021`}
            title={"OVERCOMING SEXUAL ABUSE"}
            summary="1 in every 3 women and 1 in every 4 men globally have been sexually assaulted at some point in their lives, this is according to data from th..."
            img={b1}
            blog={
              <p className=" text-sm">
                1 in every 3 women and 1 in every 4 men globally have been
                sexually assaulted at some point in their lives, this is
                according to data from the Centers for Disease Control and
                Prevention (CDC). It is very important to note that sexual
                assault is not limited to women, each year a significant number
                of men and boys suffer from rape and sexual trauma. The impact
                of trauma is beyond the physical injuries that one may receive.
                It is socially, psychologically, mentally, and emotionally
                exhausting. The world no longer feels like the safe place you
                once knew. Relationships feel blunt if not dangerous, and
                intimacy becomes foreign and impossible. Healing from rape and
                sexual trauma takes time and can be a painful process for the
                victim and those around them. On the brighter side, you can
                regain your sense of control, rebuild your self-worth, and with
                a team of supportive friends and family, you learn the healing
                process.
                <br /> <br />
                <strong>
                  COMMON MYTHS AND FACTS ABOUT RAPE AND SEXUAL ASSAULT
                </strong>
                <br />
                <hr />
                Myth: You can spot a rapist by their appearance
                <br />
                Fact: Rapists look normal and non-threatening
                <br />
                Myth: If you did not fight back, you must have entertained the
                idea
                <br />
                Fact: During an assault, your body and the brain get numb making
                it impossible to take any action.
                <br />
                Myth: Victims contribute to their assault by their dress code or
                actions
                <br />
                Fact: Rapists choose victims based on their vulnerability not on
                their appearance or actions.
                <br />
                Myth: Rape over a date is often due to a misunderstanding
                <br />
                Fact: Rapists who attack their victims over a date are repeat
                offenders.
                <br />
                Myth: It is not rape if the offender is your Intimate Partner
                <br />
                Fact: If your partner forces intercourse against your will, it's
                rape.
                <br />
                <br />
                <strong>STEPS TO HEALING FROM RAPE OR SEXUAL TRAUMA</strong>
                <br />
                <hr />
                Open up about what happened to you Staying silent denies you the
                opportunity to get help. Reach out to someone you can trust or a
                therapist, or call hotline numbers available in your country
                where you can get help. You may join a support group for other
                survivors either a physical one or through online platforms.
                <br />
                Stay Connected Isolation will only worsen your condition.
                Participate in social activities like going to the park with
                friends, playing board games, going out for hikes. Reconnect
                with old friends and make new friends as they all come with new
                experiences or refresh memories of a beautiful past.
                <br />
                Nurture Yourself Get out and discover or grow a skill or two.
                You may have always admired acting, go out for auditions. Paint
                all the colors of the wind if you can, read books, do
                yoga…everything possible to reconnect with yourself. Avoid
                anything that may drain you or remind you of the ugly incident.
                Take care of your physical, spiritual, and mental health. Try
                out activities such as Rhythmic movement, Mindfulness
                medication, and Getting a massage.
                <br />
                <br />
                <strong>
                  NB: Remember, healing starts from you, avoid anything that may
                  remind you of the assault, and associate with everything that
                  makes you happy.
                </strong>{" "}
              </p>
            }
          />
          <Kard
          date={`25 May 2021`}
            title={"MENSTRUAL HYGIENE AWARENESS CAMPAIGN"}
            summary="“Anything you can do I can do it Bleeding.” 

            ...
"
            img={b2}
            blog={
              <p>
                <strong> “Anything you can do I can do it Bleeding.” </strong>{" "}
                <br />
                It is rather unfortunate that learning has to stop for some
                girls when receiving their monthly period. As Umundu Artivism we
                believe that periods are flowers that symbolize the beauty of
                being born a woman. We conduct menstrual hygiene campaigns among
                teenage girls solely because despite lacking access to sanitary
                towels, some have insufficient knowledge on how to maintain
                proper hygiene during their periods leading to the contraction
                of infections. In the company of public health officers in
                Runyenjes Sub-County, we educate young girls on how to properly
                wear and dispose of the sanitary towels after use. We educate
                them on how to clean up during their periods and how important
                it is to change their inner wears. With contributions from
                members of the organization and well-wishers, we provide dignity
                kits to our beneficiaries comprising of sanitary towels, toilet
                papers, an inner pant, a face towel, and a bar of sunlight soap
                for general body hygiene. Our goal is to keep our girls in
                school covered, happy, and healthy.
                <br />
                <br />
                To support our project, reach out to us via email{" "}
                <span className=" text-blue-700">
                  info@theumunduartivism.org
                </span>
                <br />
                <br />
                For images of the campaign, follow this link{" "}
                <span className=" text-blue-700">
                  https://twitter.com/umunduartivism/status/1366984998428041216
                </span>
              </p>
            }
          />
        </div>
      </div>
    </section>
  );
}
