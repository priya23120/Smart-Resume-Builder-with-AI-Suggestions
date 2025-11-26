const Resume = require("../models/Resume");
const axios = require("axios");

exports.createResume = async (req, res) => {
    try {
        const { name, email, phone, education, experience, skills } = req.body;

        const prompt = `
Suggest improvements for this resume:
Name: {name}
Email: {email}
Phone: {phone}
Education: {education}
Experience: {experience}
Skills: {skills}
        `;

        // OpenAI Request
        const response = await axios.post(
            "https://api.openai.com/v1/responses",
            {
                model: "gpt-4o",
                input: prompt
            },
            {
                headers: {
                    Authorization: Bearer  .process.env.OPENAI_API_KEY ,
            "Content-Type": "application/json"
                }
            }
        );

const suggestions = response.data.output_text || "No suggestions generated.";

const resume = new Resume({
    name,
    email,
    phone,
    education,
    experience,
    skills,
    suggestions,
});

await resume.save();

res.status(201).json(resume);

    } catch (err) {
    console.error("ERROR:", err.response?.data || err.message);
    res.status(500).json({ message: "Server Error", error: err.message });
}
};