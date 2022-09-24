import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

const liens = [
    {
        id: "00",
        nom: "github",
        lien: "https://github.com/poclerson",
        icone: <GitHubIcon />
    },
    {
        id: "01",
        nom: "linkedin",
        lien: "https://www.linkedin.com/in/pierre-olivier-clerson-377689181/",
        icone: <LinkedInIcon />
    },
    {
        id: "02",
        nom: "courriel",
        lien: "mailto:poclerson@gmail.com",
        icone: <AlternateEmailIcon />
    }
]

export default liens;