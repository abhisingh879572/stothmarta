import React from "react";
import "./gallery.css";
function Gallery() {
  return (
    <div className="container-fluid">
      <p
        data-aos="fade-up"
        className="mt-4 font-serif text-3xl font-semibold text-center uppercase sm:text-4xl"
      >
        PERSONAL DEVELOPMENT
      </p>

      <div className="container mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div></div>
        </div>

        <p>
          Personal Development is a lifelong process. It is a way for people to
          assess their skills and qualities, consider their aims in life and set
          goals in order to realize and maximize their potential. If you have
          specific personal projects, transitions in your personal life, issues
          with your relationships then I can assist you to start examining what
          is going on right now, to discover what holds you back or what
          challenges might be. Finally, I will help you to choose a course of
          action to make your life what you want it to be.
        </p>
      </div>

      <div className="container-fluid">
        <br />
        <div className="grid grid-cols-12 gap-4 mt-5">
          <div className="col-span-1"></div>
          <div className="col-span-10">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
              <div className="col-span-1">
                <img
                  className="goss"
                  src="https://www.stothmarta.com/wp-content/uploads/2018/10/Life-Coaching-Marta-S-Toth-Life-Business-Coach-Accredited-NLP-Trainer-Business-Trainer-Coaching-NLP-Courses-600x403.jpg"
                  alt=""
                />
                <h4 className="mt-3 text-center text-white">Life Coaching</h4>
              </div>
              <div className="col-span-1">
                <img
                  className="goss"
                  src="https://www.stothmarta.com/wp-content/uploads/2018/10/NLP-Neuro-Linguistic-Programming-Marta-S-Toth-Life-Business-Coach-Accredited-NLP-Trainer-Business-Trainer-Coaching-NLP-Courses-600x403.jpg"
                  alt=""
                />
                <h4 className="mt-3 text-center text-white">
                  NLP (Neuro-Linguistic Programming)
                </h4>
              </div>
              <div className="col-span-1">
                <img
                  className="goss"
                  src="https://www.stothmarta.com/wp-content/uploads/2018/10/Business-Coaching-Marta-S-Toth-Life-Business-Coach-Accredited-NLP-Trainer-Business-Trainer-Coaching-NLP-Courses-1-600x403.jpg"
                  alt=""
                />
                <h4 className="mt-3 text-center text-white">Career Coaching</h4>
              </div>
              <div className="col-span-1">
                <img
                  className="goss"
                  src="https://www.stothmarta.com/wp-content/uploads/2018/10/Executive-Coaching-Marta-S-Toth-Life-Business-Coach-Accredited-NLP-Trainer-Business-Trainer-Coaching-NLP-Courses-1-600x403.jpg"
                  alt=""
                />
                <h4 className="mt-3 text-center text-white">
                  Relationship Coaching
                </h4>
              </div>

              <div className="col-span-1">
                <img
                  className="goss"
                  src="https://www.stothmarta.com/wp-content/uploads/2018/10/NLP-Time-Line-Therapy-Marta-S-Toth-Life-Business-Coach-Accredited-NLP-Trainer-Business-Trainer-Coaching-NLP-Courses-600x403.jpg"
                  alt=""
                />
                <h4 className="mt-3 text-center text-light">
                  NLP Time Line Therapy
                </h4>
              </div>
              <div className="col-span-1">
                <img
                  className="goss"
                  src="https://www.stothmarta.com/wp-content/uploads/2018/10/Organizational-Development-Coaching-Marta-S-Toth-Life-Business-Coach-Accredited-NLP-Trainer-Business-Trainer-Coaching-NLP-Courses-1-600x403.jpg"
                  alt=""
                />
                <h4 className="mt-3 text-center text-light">
                  Business Mediation
                </h4>
              </div>
              <div className="col-span-1">
                <img
                  className="goss"
                  src="https://www.stothmarta.com/wp-content/uploads/2018/10/Mediation-Marta-S-Toth-Life-Business-Coach-Accredited-NLP-Trainer-Business-Trainer-Coaching-NLP-Courses-600x403.jpg"
                  alt=""
                />

                <h4 className="mt-3 text-center text-light">
                  Leadership Coaching
                </h4>
              </div>
              <div className="col-span-1">
                <img
                  className="goss"
                  src="https://img.freepik.com/free-photo/group-young-people-enjoying-working-together_23-2148499877.jpg?t=st=1714030996~exp=1714034596~hmac=2968649cb471d454b34668c571b8f182c31b9ebd6a2c82c79ff9413e5624f6e0&w=1380"
                  alt="dd"
                />
                <h4 className="mt-3 text-center text-light">
                  Leadership Coaching
                </h4>
              </div>
            </div>
          </div>
          <div className="col-span-1"></div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
