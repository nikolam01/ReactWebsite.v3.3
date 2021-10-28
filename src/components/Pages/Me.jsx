import React from 'react'
import '../Assets/CSS/Me.css'
import myImage1 from '../Assets/img/Team/2.jpeg'
import myImage2 from '../Assets/img/Me/fonis.png'
import myImage3 from '../Assets/img/Me/pulls.jpg'
import myImage4 from '../Assets/img/Me/programming.jpg'

const Me = () => {
  return (
    <div className="container">
      <div className="row">
        <h1 className="col-sm-12" id="titleMe">
          I am Nikola, the developer of this website!
        </h1>
        <p className="col-sm-9" id="text">
          Hi, my name is Nikola, I am 20 years old, and I live in the north part
          of Belgrade, Zemun. In 2019. I enrolled at the Faculty of
          Organizational Sciences, majoring in Operational Management,
          department of Management and Organization. I am occupied with IT
          development, management and organization, and training. In the future,
          I want to combine IT and management through one job like Project
          Manager or IT Manager. My motto is{' '}
          <b>"Keep focus, embrace your vulnerabilities, and work hard". </b>I am
          always seeking for more knowledge, experience, and skills, beacuse I
          think that the key tool for success is constant effort, and
          determination.<br></br>
          <b>
            Any person with average or little below intelligence can achieve
            whatever he wants only if he is ready to dedicate himself to it to
            the maximum.
          </b>
        </p>
        <div className="col-sm-3" id="imgDiv1">
          <img src={myImage1} alt="" id="myImage1"></img>{' '}
        </div>
      </div>
      <div className="row">
        <p className="col-sm-12" id="text">
          <h2 id="subtitleMe">Education</h2>
          Education means studying in order to obtain a deeper knowledge and
          understanding of a variety of subjects to be applied to daily life.
          Education is not limited to just knowledge from books, but can also be
          obtained through practical experiences outside of the classroom. There
          are two types of education, formal and informal. Formal education:{' '}
          <br></br>
          <li>
            Certificate of finished sports high school with an average GPA of
            4.8.
          </li>
          <li>
            In 2019, enrolled at the Faculty of Organizational Sciences majoring
            in Management and Organization.
          </li>
          Informal education is the wise, respectful and spontaneous process of
          cultivating learning. It works through conversation, and the
          exploration and enlargement of experience. Informal education is more
          important than formal, therefore, I am trying to keep focus on this
          type of education. There are too many hours that I spend on side
          hustling like programming, books, unobligatory projects, etc. In
          October of 2020 I joined the computer science student association
          FONIS.
        </p>

        <p className="col-sm-9" id="text">
          <h2 id="subtitleMe">Sport</h2>
          As an 8-year-old kid, I trained basketball for 3 months in the
          basketball club "Mecina" in Kraljevo. When my family and I moved to
          Belgrade I started training rowing at rowing club "Partizan". I
          trained rowing for 6 years and competed at numerous domestic and
          international races in which I won around 40 medals. My greatest
          achievements in rowing are:
          <li>6x international champion, 4x vice-champion</li>
          <li>4x state champion, 2x state vice-champion</li>
          <li>2x competitor at the "Balkan rowing championship"</li>
          <li>2x indoor rowing champion</li>
          Rowing has had a big part in forming my personality, especially
          teaching me how to be disciplined in every possible situation. Rowing
          is a cruel and ruthless sport that does not forgive any mistakes. I
          quitted rowing in 2019, because I realized I had to devote more time
          learning math for the entrance exam. In my opinion, education will
          always be more valuable than sport. The day after I quit rowing, I
          went to a nearby gym named "Muscle factory gym" and I have been
          training actively ever since. In my gym training I try to combine
          multiple different sports such as bodybuilding, powerlifting,
          calisthenics, CrossFit, running and boxing.
        </p>
        <div className="col-sm-3" id="imgDiv2">
          <img src={myImage2} alt="" id="myImage2"></img>
          <img src={myImage3} alt="" id="myImage3"></img>
        </div>

        <p className="col-sm-12" id="text">
          <h2 id="subtitleMe">Mindset</h2>
          Mindset is the most important part of the personality and that is a
          place where the difference is made between people. The best mindsets
          are created in terrible situations, for example, poverty, loss of a
          close member of the family, huge disappointment, etc. Point is that we
          cannot have healthy and righteous mindsets if we haven't passed some
          bad situations in life. A famous quote will best describe this: "What
          doesn't kill you makes you stronger" and I will add "and makes you
          better". In the previous 4 years, I have changed my personality a lot.
          Credits go to my family, best friend Marko,s and to the books. Believe
          it or not books had a huge impact on my personality, especially book
          written by Mark Manson named "Subtle art of not giving a fuck".
          Lessons that I learned from that book and life are:
          <br></br>
          <li>Always give your best to improve your personality.</li>
          <li>
            Don't give a fuck about stupid things, only for important things
            such as family.
          </li>
          <li>Listen to the advice that important people are saying.</li>
          <li>Honesty is the most important part of every relationship.</li>
          <li>
            <u>
              Don't do things to someone else that you don't want others to do
              to you .
            </u>
          </li>
          <li>
            Don't try to be someone else, just be the best version of yourself.
          </li>
          <li>
            One little decision can have a huge impact on your life ("the
            Butterfly effect").
          </li>
          <li>
            It is normal to be hated by people if you are more successfull in
            every aspect of life.
          </li>
          <li>
            Don't let emotions control your behavior, always listen to your mind
            and be patient when deciding.
          </li>
          The book enlightened me completely and gave me a base for the process
          of mental change. Three years after reading that book I became
          completely different person.
        </p>

        <p className="col-sm-9" id="text">
          <h2 id="subtitleMe">Hobbies</h2>I have a wide range of interests,
          therefore, I have a lot of hobbies. I'm always trying to organize my
          free time for activities that will mostly improve mind as well as my
          body. These activities are:
          <li>Programming (Java, Python) </li>
          <li>Gym and Street workout</li>
          <li> Fighting sports (Box, MMA)</li>
          <li>Listening music </li>
          <li>
            Reading books (especially psychological, self-improvement and
            astrophysics){' '}
          </li>
          <li>Basketball, swimming, running, tennis, etc. </li>
          <li>Web development (HTML, CSS, JS) </li>
        </p>
        <div className="col-sm-3" id="imgDiv3">
          <img src={myImage4} alt="" id="myImage4"></img>{' '}
        </div>

        <p className="col-sm-12" id="text">
          <h2 id="subtitleMe">Working experience</h2>I started working as an
          18-year-old teenager when I joined the youth working club. In a short
          period, I worked for a many companies and learned a lot about a
          warehouse, construction, and relocation work. Meanwhile, I learned a
          lot about programming, web design, and fitness. Here is a list of my
          working experience:<br></br>
          <li>
            Warehouse jobs in companies: "Milsped", "Delta transport systems",
            "Gebruder Weiss", "Nelt", "Forbel", and "Union sped".
          </li>
          <li>
            Construction jobs in companies: "MKM Global Building" where I worked
            on the reconstruction of an office from the CEO of "NIS" company.
            "WD Concord West" where I worked as a manual worker on a government
            project of hospital construction.
          </li>
          <li>
            Relocation jobs for a numerous companies which I work from time to
            time.
          </li>
          <li>
            Construction of personal website using HTML5, CSS3 (Bootstrap), JS
            (Vanila, and Node), and Netlify platform.
          </li>
        </p>
      </div>
    </div>
  )
}
export default Me
