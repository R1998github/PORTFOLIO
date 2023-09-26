export default function Project() {
  return (
    <>
      <div className="heading">      
        <h3>My Projects</h3>
        <hr style={{ width: 700 }}></hr>
      </div>

      <div className="Projects">
        <div className="nobita"></div>
        <div className="project">
          <div className="GetHome">
            <div className="GetImage"></div>
            <div className="GetAbout">
              <span>GetHome:</span>
              <p>
                Get Home is a broker app that helps users to find suitable
                rental houses. It is a group project made in our third semester
                of master's, We found that students were struggling to find the
                room and local brokers were charging high That is why we created
                this app which is free to use and easy to use.
              </p>
            </div>
            <div className="btndiv"><button className="btn">GetSource</button></div>
          </div>

          <div className="eFood">
            <div className="eFoodImage"></div>
            <div className="eFoodAbout"> <span>eFood:</span>
              <p>
              eFood is a food delivery web application where users can create their profiles, add food items to their cards, and place orders. Although it was my graduation project I rebuilt it with React and Mongodb which was a great experience.

              </p></div>

          <a href="https://github.com/RohitAnnie111/eFood"> <div className="  "><button className="btn">GetSource</button></div></a>

          </div>
        </div>
      </div>
    </>
  );
}
