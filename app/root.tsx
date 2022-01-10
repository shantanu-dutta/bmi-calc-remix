import { Links, LiveReload, Meta, json, useActionData, Scripts } from "remix";
import type { ActionFunction, MetaFunction, LinksFunction } from "remix";
import stylesUrl from "~/styles/global.css";
import Header from "./components/Header/Header";
import BmiFormView from "~/components/BmiFormView/BmiFormView";
import calculateBmi from "./utils/calculate-bmi.util";
import BmiStatusCard from "./components/BmiStatusCard/BmiStatusCard";
import type { BmiStatusType } from "./types/bmi-status.type";
import calculateBmiStatus from "./utils/calculate-bmi-status.util";
import BmiTips from "./components/BmiTips/BmiTips";
import getBmiTips from "./utils/get-bmi-tips.util";

export const links: LinksFunction = () => {
  return [
    { href: "https://fonts.googleapis.com", rel: "preconnect" },
    {
      href: "https://fonts.gstatic.com",
      rel: "preconnect",
      crossOrigin: "anonymous",
    },
    {
      href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap",
      rel: "stylesheet",
    },
    { href: stylesUrl, rel: "stylesheet" },
  ];
};

export const meta: MetaFunction = () => {
  return { title: "BMI Calculator" };
};

type AppActionData = {
  bmi: number;
  status: BmiStatusType;
  tips: string;
  formData: {
    height: number;
    weight: number;
    gender: string;
    age: number;
  };
};

export const action: ActionFunction = async ({ request }) => {
  const body = await request.formData();
  const height = body.get("height");
  const weight = body.get("weight");
  const gender = body.get("gender");
  const age = body.get("age");

  if (!height || !weight || !age) {
    return json("Invalid input", { status: 400 });
  }
  const bmi = calculateBmi(+weight, +height);
  const status = calculateBmiStatus(bmi);
  const tips = getBmiTips(status);

  return json({
    bmi,
    status,
    tips,
    formData: { height: +height, weight: +weight, gender, age: +age },
  } as AppActionData);
};

export default function App() {
  const data = useActionData<AppActionData>();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <header>
          <Header />
        </header>
        <main className="main wrapper">
          <div className="section form">
            <BmiFormView {...data?.formData} />
          </div>
          <div className="section bmi">
            {data && (
              <div className="bmi-details">
                <BmiStatusCard bmi={data.bmi} status={data.status} />
                <BmiTips tips={data.tips} />
              </div>
            )}
          </div>
        </main>
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
