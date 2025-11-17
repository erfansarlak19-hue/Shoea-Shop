import '../src/style/style.css'
import { router } from './components/utils/router';
import { OnboardingPage1 } from './pages/onboardingPage/onboardingPage1';
import { OnboardingPage2 } from './pages/onboardingPage/onboardingPage2';


const app = document.getElementById("app");
app.append(OnboardingPage1(), OnboardingPage2);

router.addRoute("/", OnboardingPage1);
router.addRoute("/onboarding-2", OnboardingPage2);

router.init(app);
