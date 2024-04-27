import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";
import Gmail from "../Gmail/Gmail";
const Businesstrainings = () => {
  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-2 sm:min-h-[100px] sm:grid sm:place-items-center">
        <p
          data-aos="fade-up"
          className="mt-6 font-serif text-3xl font-semibold text-center uppercase sm:text-4xl"
        >
          Business Trainings{" "}
        </p>
        <div className="container p-5 text-justify">
          <p>
            <strong>
              <span style={{ color: "#006f82" }}>Business Trainings </span>
            </strong>{" "}
            can help give you and your employees the skills needed to make your
            business succeed! Developing your skills and the skills of your
            employees can help to keep your business competitive. Investing in
            skills and training can increase productivity and innovation, help
            you attract and retain high-quality employees, and improve customer
            satisfaction. Take the time to work out what skills will help your
            business grow and what support is available for your business.
          </p>
          <p className="font-normal">
            A{" "}
            <strong>
              <span style={{ color: "#006f82" }}>Business Training</span>
            </strong>{" "}
            has many benefits for your staff:
          </p>
          <ul className="pl-5 mt-2 list-disc">
            <li>
              They acquire new skills, increasing their contribution to the
              business and building their self-esteem.
            </li>
            <li>
              The training they do can take them into other positions within the
              organization – positions with better prospects and/or better pay.
            </li>
            <li>
              They’re upskilled to do new and different tasks, which keeps them
              motivated and fresh because they’re being trained on your time,
              they see that you value them enough to invest in them. A good
              company is seen as one that retrains rather than churns.
            </li>
          </ul>
          <br />
          <p className="text-justify ">
            My <b style={{ color: "#006f82" }}>Business Trainings</b> are a
            time-efficient and cost-effective way to train an entire team.
            Because each course is exclusively tailored to the client
            organization, these courses ensure that all attendees receive a
            consistent message and allow our trainer to customize the learning,
            examples, or exercises to explicitly meet business needs. All my
            trainings are based on the <b> Lineo CoachingTM</b> unique and
            innovative method of teaching. <b> Lineo CoachingTM</b>TM by{" "}
            <b> Marta S. Toth</b> is my registered teaching and training method
            and combine knowledge and techniques of{" "}
            <b>Coaching, NLP and Mediation.</b>. The training method follows
            this general pattern – the training is very interactive and
            innovative:
            <h5>
              The training method follows this general pattern – the training is
              very interactive and innovative:
            </h5>
          </p>

          <ul className="pl-5 mt-3 list-disc">
            <li>
              The trainer gives a clear explanation of the point in question
              with specific examples.
            </li>
            <li>
              Then, the delegates practice by doing an exercise with each other.
            </li>
            <li>The delegates practice by doing exercise with the trainer.</li>
            <li>
              Delegates are asked to write down an associated action, for each
              point made.
            </li>
          </ul>

          <p
            data-aos="fade-up"
            className="font-semibold text-center uppercase ont-serif m text-1xl sm:text-2xl mt-7"
          >
            <h4 style={{ color: "#006f82" }}>
              Examples of Business Trainings based on Life and Business
              Coaching, NLP and Conflict Resolution techniques.
            </h4>
          </p>

          <div className="grid grid-cols-1 gap-2 mt-5 sm:grid-cols-2">
            <div className="col-span-1 sm:col-span-1">
              <ul className="pl-4 list-disc">
                <li>Leadership and Management Training</li>
                <li>Stress, Burnout Prevention Training</li>
                <li>Goal Setting, Communication and Conflict Training</li>
                <li>Conflict Management Training</li>
                <li>Communication Skills Training</li>
                <li>Time Management Training</li>
                <li>Team Building Training</li>
                <li>Personal Effectiveness Training</li>
                <li>Personal Development Training</li>
                <li>Achievement Focus Training</li>
                <li>Appraisal and Goal Setting Training</li>
                <li>Assertiveness Skills Training</li>
                <li>Coaching and Mentoring Training</li>
                <li>Coaching Skills Training</li>
                <li>Communication Skills Training</li>
                <li>Customer Service Training</li>
              </ul>
            </div>
            <div className="col-span-1 sm:col-span-1">
              <ul className="pl-4 list-disc">
                <li>Emotional Intelligence Training</li>
                <li>Feedback Skills Training</li>
                <li>Fundamental Management Skills Training</li>
                <li>Handling Difficult People</li>
                <li>Hospitality Sector Training</li>
                <li>Intercultural Communication Training</li>
                <li>Interview Technique Training</li>
                <li>Negotiation Skills Training</li>
                <li>Presentation Skills Training</li>
                <li>Problem Solving Training</li>
                <li>Recruiting and Interviewing Techniques</li>
                <li>Release your Sales Potential Training</li>
                <li>Sales Training – The Power to Influence</li>
                <li>Senior Management Training</li>
                <li>Train the Trainer Course</li>
                <li>Work-life Balance and Stress Management</li>
              </ul>
            </div>
          </div>

          <div
            className="grid grid-cols-12 p-3 mt-4 mt-5 bg-blue-900 bg-opacity-50"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <div className="col-span-3"></div>
            <div className="col-span-6 text-center text-white ">
              <h5>
                If you want to know more about any Business Trainings or you
                already know their suitability for you or your organization call
                me on +36 70 394 5336 or send me an email to{" "}
                <b>office@stothmarta.com</b> <br />
                <br />
                All trainings are available in English, Hungarian or Romanian
                language.
              </h5>
            </div>
            <div className="col-span-3"></div>
          </div>
        </div>
      </div>
      <Gmail />
    </>
  );
};

export default Businesstrainings;
