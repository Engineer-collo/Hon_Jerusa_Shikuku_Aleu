
import { Helmet } from "react-helmet";
import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Milima Ward | Hon. Jerusa Shikuku Aleu</title>
        <meta name="description" content="Hon. Jerusa Shikuku Aleu - Development, Education, Healthcare, and Infrastructure projects in Milima Ward." />
        <meta name="keywords" content="Milima Ward, Jerusa Shikuku Aleu, Education, Healthcare, Infrastructure, Projects, Bungoma County, MCA" />
        <meta name="author" content="Hon. Jerusa Shikuku Aleu" />
        <meta property="og:title" content="Milima Ward | Hon. Jerusa Shikuku Aleu" />
        <meta property="og:description" content="Recent achievements and development projects by Hon. Jerusa Shikuku Aleu in Milima Ward." />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="min-h-screen w-full overflow-x-hidden bg-gray-50">
        <Hero />
        {/* Quick Highlights - Full Width */}
        <div className="w-full py-12 px-4 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-blue-800">Education</h3>
              <p className="text-gray-600">
                Championing quality education through school infrastructure development and bursary programs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-blue-800">Healthcare</h3>
              <p className="text-gray-600">
                Improving healthcare access with new facilities and maternal health programs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-blue-800">Infrastructure</h3>
              <p className="text-gray-600">
                Building roads, bridges, and water projects to connect and serve communities.
              </p>
            </div>
          </div>
        </div>
        {/* Latest News/Updates - Full Width */}
        <div className="w-full py-8 px-4 md:px-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Recent Achievements</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ul className="space-y-4">
              <li className="border-b pb-3">
                <h4 className="font-semibold">New classrooms commissioned at Milima Primary</h4>
                <p className="text-gray-600 text-sm">Completed last month</p>
              </li>
              <li className="border-b pb-3">
                <h4 className="font-semibold">Bursary disbursement for 500 students</h4>
                <p className="text-gray-600 text-sm">Ongoing this term</p>
              </li>
              <li>
                <h4 className="font-semibold">Groundbreaking for new health center</h4>
                <p className="text-gray-600 text-sm">Starting next week</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Community Highlights with Images */}
      <div className="w-full py-8 px-4 md:px-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Community Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Ceremony Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="/ceremony.jpeg" alt="International Day of Cooperatives Ceremony" className="w-full rounded-lg shadow-md mb-4" />
            <p className="text-gray-700 text-sm">
              I joined Engineer Antony Kibunguchi (CEC Agriculture), Chief Officer Cooperatives Timothy Wanjala, Sub-County officers across Bungoma County, and members from different cooperative societies at Lukhokhwe Comprehensive School in celebrating International Day of Cooperatives.
              <br /><br />
              It was a great honor and pleasure to join cooperators in marking this important occasion—the International Day of Cooperatives, a day that celebrates the invaluable role that cooperative societies play in building resilient, inclusive, and sustainable communities.
              <br /><br />
              With "Driving Inclusive and Sustainable Solutions for a Better World" as the theme, the theme speaks for itself directly to the heart of what cooperatives are and what they do. Cooperatives are not just economic entities; they are instruments of social justice, economic empowerment, and collective progress in any given society.
              <br /><br />
              Across our county, and indeed the entire country, cooperative societies have been the lifeline for millions. With over 400 cooperative societies across Bungoma County, these cooperatives act as bridges to opportunity—from SACCOs empowering our youth and women with financial services, to agricultural cooperatives giving small-scale farmers a voice in markets.
              <br /><br />
              This financial year, my administration through the county government of Bungoma has allocated 2 Million shillings for the renovation of NADAFA. I also urged Engineer Kibunguchi to work on how grabbed government land will be repossessed so as to pave way for construction of more cooperative societies.
              <br /><br />
              As your elected representative, I reaffirm my full support for the cooperative movement and as the county government, we are working to strengthen the legal and institutional frameworks to protect and empower cooperatives while facilitating access to affordable credit, training, and markets for our farm produce and also ensure that cooperatives are part of our broader development strategy, especially in rural areas.
            </p>
          </div>
          {/* Roads Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="/roads.jpeg" alt="Makunga-Kwena Road Works" className="w-full rounded-lg shadow-md mb-4" />
            <p className="text-gray-700 text-sm">
              Grading, Gravelling, and Murraming of Makunga-Kwena Road in progress.
              <br /><br />
              Nabing'eng'e village unit contractor will be on the site on Monday.
            </p>
          </div>
          {/* Sports Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="/sports.jpeg" alt="Mukuyuni Netball Team Ceremony" className="w-full rounded-lg shadow-md mb-4" />
            <p className="text-gray-700 text-sm">
              Milima Ward MCA Jerusa Aleu Sikuku today morning passed by at Mukuyuni Primary School to hand over netball attires to Mukuyuni Netball Team and also urged them to put more effort in co-curricular activities and academics.
              <br /><br />
              "As you take part in this exciting tournament, I commend your energy, talent, and teamwork. Remember, while sports build strength and unity, your academics shape your future. Strive to excel in both because true champions shine on and off the field," said the MCA.
              <br /><br />
              Hon. Jerusa Aleu Sikuku further promised to stand with the school now and beyond the ongoing interschool ball games. "As your MCA, I stand with you every step of the way. Count on my full support now and beyond the tournament. Keep aiming high."
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
