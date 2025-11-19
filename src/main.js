import "swiper/css";
import "../src/style/style.css";
import { router } from "./components/utils/router";
import { OnboardingPage } from "./pages/onboarding/onboarding";
import { OnboardingPage2 } from "./components/onboarding/onboarding2";
import { OnboardingSwiper } from "./components/onboarding/onboardingSwiper";
import { LoginPage } from "./pages/login/login";
import { Signup } from "./components/login/signup";
import { HomePage } from "./pages/home/home";

const app = document.getElementById("app");

router.addRoute("/", OnboardingPage);
router.addRoute("/onboarding2", OnboardingPage2);
router.addRoute("/onboarding3", OnboardingSwiper);
router.addRoute("/login", LoginPage);
router.addRoute("/signup", Signup);
router.addRoute("/home", HomePage)
router.init(app);