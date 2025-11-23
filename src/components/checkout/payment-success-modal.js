import { El } from "../utils/el.js";
import { router } from "../utils/router.js";
import { store } from "../utils/store.js";
export function PaymentSuccessModal(){


  const modalRoot = El({
    element: "div",
    className:
      "fixed inset-0 z-50 hidden flex items-center justify-center bg-black/40 backdrop-blur-sm",
  });

  store.subscribe("isPaymentSuccessOpen", (isOpen) => {
    if (isOpen) {
      modalRoot.classList.remove("hidden");
      modalRoot.innerHTML = "";

      const box = El({
        element: "div",
        className:
          "w-85 h-120 bg-white rounded-[10%] px-6 pt-8  shadow-2xl animate-scaleIn text-center",
        children: [
          El({
            element: "img",
            className:
              "w-55 h-50 mx-auto mb-6 rounded-2xl",
              src:"./public/png/success-modal.png"
          }),
          El({
            element: "p",
            className: "text-xl font-semibold mb-2",
            innerText: "Order Successful!",
          }),
          El({
            element: "p",
            className: "text-sm text-gray-500 mb-6",
            innerText: "You have successfully made order",
          }),
          El({
            element: "div",
            className: "flex flex-col gap-3",
            children: [
              El({
                element: "button",
                className:
                  "w-full py-4 rounded-4xl bg-black text-white font-semibold",
                innerText: "Home",
                eventListener: [
                  {
                    event: "click",
                    callback: () => {
                      router.navigate("/home")
                    },
                  },
                ],
              }),
              El({
                element: "button",
                className:
                  "w-full py-4 rounded-4xl bg-gray-100 text-gray-700 font-semibold",
                innerText: "View E-Receipt",
                eventListener: [
                  {
                    event: "click",
                    callback: () => {
                      store.setState("isPaymentSuccessOpen", false);
                    },
                  },
                ],
              }),
            ],
          }),
        ],
      });
      modalRoot.append(box);
    } else {
      modalRoot.classList.add("hidden");
    }
  });

  return modalRoot;
}
