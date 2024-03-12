import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
// import ChatBotModal from "../ChatBotModal/ChatBotModal.jsx";
import { FiMessageSquare, FiMic, FiHeadphones, FiEdit, FiBook } from "react-icons/fi"; // Importing the necessary icons
import rightBack from "../../assets/activity-bg6.png";
import Footer from "../Footer/Footer.jsx";

const ActivityPanel = () => {

    // eslint-disable-next-line no-unused-vars
    const fadeIn = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 800 },
    });

    const slideIn = useSpring({
        transform: "translateX(0)",
        from: { transform: "translateX(-100%)" },
        config: { duration: 800 },
    });

    const bounceIn = useSpring({
        opacity: 1,
        transform: "translateY(0)",
        from: { opacity: 0, transform: "translateY(-100%)" },
        config: { duration: 800, delay: 300, tension: 300, friction: 10 },
    });


    return (
        <div className="relative flex flex-col min-h-screen">
            {/* Activity Panel */}
            <animated.div
                style={{ ...slideIn, background: `url(${rightBack})`, backgroundSize: "cover" }}
                className="flex-1 md:flex md:items-center md:justify-center "
            >
                <div className="md:w-2/3 pb-40 overflow-y-auto">
                    <h2 className="text-2xl font-bold  text-gray-800 rounded-2xl bg-gray-100 p-4 mb-4 text-center mt-24">Select Your Activity</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <animated.div style={bounceIn}>
                            <Link
                                to="/speaking"
                                className="block bg-blue-500 hover:bg-blue-700 text-white p-6 text-center transition rounded-md"
                            >
                                <FiMic className="mx-auto mb-2 text-4xl" />
                                Speaking
                            </Link>
                        </animated.div>
                        <animated.div style={bounceIn}>
                            <Link
                                to="/listening"
                                className="block bg-green-500 hover:bg-green-700 text-white p-6 text-center transition rounded-md"
                            >
                                <FiHeadphones className="mx-auto mb-2 text-4xl" />
                                Listening
                            </Link>
                        </animated.div>
                        <animated.div style={bounceIn}>
                            <Link
                                to="/writingactivity"
                                className="block bg-yellow-500 hover:bg-yellow-700 text-white p-6 text-center transition rounded-md"
                            >
                                <FiEdit className="mx-auto mb-2 text-4xl" />
                                Writing
                            </Link>
                        </animated.div>
                        <animated.div style={bounceIn}>
                            <Link
                                to="/vocabpanel"
                                className="block bg-red-500 hover:bg-red-700 text-white p-6 text-center transition rounded-md"
                            >
                                <FiBook className="mx-auto mb-2 text-4xl" />
                                Vocabulary
                            </Link>
                        </animated.div>
                        <animated.div style={bounceIn}>
                            <Link
                                to="/gradingquiz"
                                className="w-full block bg-purple-500 hover:bg-purple-700 text-white p-6 text-center transition rounded-md"
                            >
                                <FiEdit className="mx-auto mb-2 text-4xl" />
                                Grading Quiz
                            </Link>
                        </animated.div>
                        <animated.div style={bounceIn}>
                            <Link
                                to="/Controller"
                                className="block bg-indigo-500 hover:bg-indigo-700 text-white p-6 text-center transition rounded-md"
                            >
                                <FiMessageSquare className="mx-auto mb-2 text-4xl" />
                                Chat Bot
                            </Link>
                        </animated.div>
                    </div>
                </div>
            </animated.div>
            <Footer/>
        </div>
    );
};

export default ActivityPanel;
