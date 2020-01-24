import React from 'react';
import Header from 'components/Header';
import HeadMatter from 'components/HeadMatter';
import CodeBlock from 'components/CodeBlock';
import Link from 'next/link';
import { ViewerData } from 'data/queries';

const stepOne = `
{
  "functions": {
    "sendContactForm": {
      "type": "sendNotification",
      "to": "me@example.com"
    }
  }
}
`;

const stepTwo = `
$ statickit deploy
`;

const stepThree = `
import React from 'react';
import { useStaticKit } from '@statickit/react';
import { sendContactForm } from '@statickit/functions';

function ContactForm() {
  const client = useStaticKit();

  const submit = async () => {
    let { status } = await sendContactForm(client, {
      subject: 'New contact submission'
    });
  };

  return (
    <button onClick={submit}>Submit</button>
  );
}

export default ContactForm;
`;

const optInFormIcon = `
<svg width="45px" height="36px" viewBox="0 0 45 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
        <g id="mail" transform="translate(1.000000, 1.000000)" stroke="#ED8936" stroke-width="2">
            <path d="M4.3,0 L38.7,0 C41.065,0 43,1.9125 43,4.25 L43,29.75 C43,32.0875 41.065,34 38.7,34 L4.3,34 C1.935,34 0,32.0875 0,29.75 L0,4.25 C0,1.9125 1.935,0 4.3,0 Z" id="Path"></path>
            <polyline id="Path" points="43 4 21.5 19 0 4"></polyline>
        </g>
    </g>
</svg>
`;

const chimp = `
<?xml version="1.0" encoding="UTF-8"?>
<svg width="48px" height="50px" viewBox="0 0 48 50" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
        <polygon id="path-1" points="5.07983972e-05 0.00760799543 47.1038776 0.00760799543 47.1038776 49.9877551 5.07983972e-05 49.9877551"></polygon>
    </defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Mailchimp_Logo-Horizontal_Black">
            <path d="M35.4320408,23.6314286 C35.7969388,23.5879592 36.1465306,23.5859184 36.4677551,23.6314286 C36.6536735,23.205102 36.6857143,22.47 36.5183673,21.6695918 C36.2697959,20.4797959 35.9334694,19.7597959 35.2381633,19.8718367 C34.5430612,19.9838776 34.5173469,20.8459184 34.7659184,22.0357143 C34.9057143,22.704898 35.1546939,23.2769388 35.4320408,23.6314286" id="Fill-14" fill="#0A0B09"></path>
            <path d="M29.4636735,24.5728571 C29.9610204,24.7912245 30.2667347,24.9359184 30.3863265,24.8093878 C30.4632653,24.7306122 30.4404082,24.5802041 30.3216327,24.3861224 C30.0761224,23.9853061 29.5710204,23.5789796 29.0353061,23.3506122 C27.9395918,22.8789796 26.6328571,23.0359184 25.6246939,23.7602041 C25.2920408,24.0040816 24.9765306,24.3418367 25.0216327,24.5469388 C25.0363265,24.6132653 25.0861224,24.6632653 25.2028571,24.6795918 C25.4773469,24.7110204 26.4361224,24.2261224 27.5406122,24.1585714 C28.3202041,24.1108163 28.9661224,24.3546939 29.4636735,24.5728571" id="Fill-15" fill="#0A0B09"></path>
            <path d="M28.4630612,25.1438776 C27.815102,25.2461224 27.4577551,25.4597959 27.2283673,25.6583673 C27.0326531,25.8293878 26.9116327,26.0185714 26.9126467,26.1516327 C26.9130612,26.214898 26.9406122,26.2514286 26.9622449,26.2697959 C26.9918367,26.2957143 27.0267347,26.3102041 27.0687755,26.3102041 C27.215102,26.3102041 27.5428571,26.1785714 27.5428571,26.1785714 C28.4444898,25.8559184 29.0391837,25.895102 29.6285714,25.9622449 C29.9542857,25.9987755 30.1081633,26.0189796 30.1795918,25.9073469 C30.2008163,25.8753061 30.2263265,25.8059184 30.1612245,25.7002041 C30.0093878,25.4540816 29.3553061,25.0379592 28.4630612,25.1438776" id="Fill-16" fill="#0A0B09"></path>
            <path d="M33.4167347,27.2397959 C33.8565306,27.4559184 34.3408163,27.3710204 34.4985714,27.0502041 C34.6561224,26.7295918 34.4273469,26.2942857 33.9873469,26.0779592 C33.547551,25.8620408 33.0632653,25.9467347 32.9055102,26.267551 C32.7479592,26.5883673 32.9767347,27.0234694 33.4167347,27.2397959" id="Fill-17" fill="#0A0B09"></path>
            <path d="M36.2446939,24.7685714 C35.8873469,24.762449 35.5910204,25.154898 35.5826531,25.644898 C35.5742857,26.135102 35.8573469,26.5371429 36.2146939,26.5432653 C36.5720408,26.5493878 36.8685714,26.1569388 36.8767347,25.6669388 C36.885102,25.1767347 36.6020408,24.7744898 36.2446939,24.7685714" id="Fill-18" fill="#0A0B09"></path>
            <g id="Group-22">
                <mask id="mask-2" fill="white">
                    <use xlink:href="#path-1"></use>
                </mask>
                <g id="Clip-20"></g>
                <path d="M12.2410204,33.605102 C12.1522449,33.4936735 12.0061224,33.527551 11.8646939,33.5606122 C11.7659184,33.5836735 11.6540816,33.6095918 11.5314286,33.607551 C11.2685714,33.602449 11.0459184,33.4902041 10.9210204,33.2981633 C10.7581633,33.0481633 10.767551,32.6753061 10.9473469,32.2487755 C10.9714286,32.1910204 11,32.1271429 11.0312245,32.057551 C11.3177551,31.4144898 11.7973469,30.3381633 11.2587755,29.3126531 C10.8534694,28.5408163 10.192449,28.06 9.39755102,27.9591837 C8.63428571,27.862449 7.84877551,28.1453061 7.3477551,28.6981633 C6.55714286,29.5704082 6.43346939,30.7573469 6.58632653,31.1767347 C6.64244898,31.3302041 6.73,31.3726531 6.79367347,31.3814286 C6.92836735,31.3993878 7.12714286,31.3016327 7.25183673,30.9663265 C7.26081633,30.9422449 7.27265306,30.904898 7.28734694,30.8573469 C7.34285714,30.6802041 7.44632653,30.3502041 7.61571429,30.0857143 C7.81979592,29.7667347 8.1377551,29.5471429 8.51102041,29.4671429 C8.89142857,29.3857143 9.28,29.4583673 9.60530612,29.6714286 C10.1591837,30.0336735 10.372449,30.7122449 10.1359184,31.3597959 C10.0138776,31.6946939 9.81530612,32.334898 9.85897959,32.8612245 C9.94755102,33.9259184 10.6026531,34.3536735 11.1910204,34.3991837 C11.7630612,34.4206122 12.1630612,34.0995918 12.2642857,33.8646939 C12.3238776,33.7259184 12.2734694,33.6414286 12.2410204,33.605102" id="Fill-19" fill="#0A0B09" mask="url(#mask-2)"></path>
                <path d="M17.6804082,14.0471429 C19.5463265,11.8906122 21.8436735,10.0159184 23.9014286,8.96306122 C23.9726531,8.92673469 24.0481633,9.00408163 24.0095918,9.07387755 C23.8461224,9.37 23.5316327,10.0034694 23.4318367,10.4840816 C23.4163265,10.5589796 23.4977551,10.6153061 23.5610204,10.5722449 C24.8412245,9.69959184 27.0683673,8.7644898 29.0218367,8.64428571 C29.1057143,8.63918367 29.1463265,8.74673469 29.0795918,8.79795918 C28.782449,9.02591837 28.457551,9.34122449 28.2202041,9.66020408 C28.1797959,9.7144898 28.2177551,9.79265306 28.2855102,9.79306122 C29.6571429,9.80285714 31.5908163,10.2828571 32.8512245,10.9897959 C32.9365306,11.037551 32.8757143,11.2026531 32.7804082,11.1808163 C30.8734694,10.7438776 27.7520408,10.4122449 24.5095918,11.2030612 C21.614898,11.9089796 19.4055102,12.9991837 17.7936735,14.1714286 C17.7122449,14.2308163 17.6144898,14.1232653 17.6804082,14.0471429 Z M34.6697959,35.8479592 C34.725102,35.8246939 34.7632653,35.7616327 34.7567347,35.6989796 C34.7489796,35.6218367 34.6802041,35.5657143 34.6030612,35.5736735 C34.6030612,35.5736735 30.6206122,36.1630612 26.8585714,34.7859184 C27.2683673,33.4540816 28.3579592,33.934898 30.004898,34.0679592 C32.9734694,34.244898 35.6338776,33.8112245 37.6002041,33.2467347 C39.3040816,32.7579592 41.5418367,31.7938776 43.28,30.4218367 C43.8663265,31.7097959 44.0732653,33.1269388 44.0732653,33.1269388 C44.0732653,33.1269388 44.5271429,33.0459184 44.9063265,33.2791837 C45.2646939,33.4997959 45.527551,33.9581633 45.3479592,35.1434694 C44.982449,37.3579592 44.0412245,39.155102 42.4593878,40.8085714 C41.4963265,41.845102 40.3273469,42.7463265 38.9897959,43.4016327 C38.2793878,43.7746939 37.5230612,44.097551 36.7240816,44.3583673 C30.7604082,46.3061224 24.6561224,44.164898 22.6883673,39.5665306 C22.5314286,39.2208163 22.3985714,38.8589796 22.2938776,38.4804082 C21.4553061,35.4502041 22.1671429,31.8146939 24.392449,29.5263265 C24.3926531,29.5261224 24.3922449,29.5253061 24.392449,29.525102 C24.5295918,29.3793878 24.6695918,29.2077551 24.6695918,28.9918367 C24.6695918,28.8112245 24.554898,28.6206122 24.4553061,28.4855102 C23.6767347,27.3563265 20.98,25.4320408 21.5212245,21.7081633 C21.91,19.0328571 24.2495918,17.1487755 26.4310204,17.2604082 C26.6153061,17.2697959 26.8,17.2812245 26.9838776,17.2920408 C27.9291837,17.3481633 28.7538776,17.4693878 29.5320408,17.5018367 C30.8344898,17.5581633 32.0057143,17.3687755 33.3928571,16.2130612 C33.8608163,15.8230612 34.2359184,15.484898 34.8708163,15.377551 C34.937551,15.3661224 35.1034694,15.3065306 35.4353061,15.3222449 C35.7738776,15.3402041 36.0963265,15.4332653 36.3859184,15.6261224 C37.4981633,16.3661224 37.6557143,18.1583673 37.7134694,19.4695918 C37.7463265,20.2179592 37.8369388,22.0287755 37.8677551,22.5485714 C37.9385714,23.7371429 38.2510204,23.9046939 38.8830612,24.1128571 C39.2385714,24.23 39.5685714,24.3171429 40.054898,24.4536735 C41.5269388,24.8669388 42.3997959,25.2863265 42.9497959,25.824898 C43.2779592,26.1614286 43.4306122,26.5191837 43.4777551,26.8602041 C43.6512245,28.1265306 42.4944898,29.6908163 39.432449,31.1122449 C36.085102,32.6657143 32.0242857,33.0591837 29.2185714,32.7467347 C29.0034694,32.7228571 28.2381633,32.6361224 28.2355102,32.6357143 C25.9912245,32.3334694 24.7110204,35.2338776 26.0579592,37.2210204 C26.9261224,38.5016327 29.2906122,39.335102 31.6563265,39.3355102 C37.0806122,39.3363265 41.2497959,37.0197959 42.8006122,35.0193878 C42.8471429,34.9595918 42.8516327,34.9530612 42.9246939,34.842449 C43.0010204,34.727551 42.9381633,34.6640816 42.8430612,34.7291837 C41.5759184,35.5961224 35.9479592,39.0381633 29.9279592,38.0026531 C29.9279592,38.0026531 29.1965306,37.882449 28.5287755,37.6226531 C27.9981633,37.4163265 26.887551,36.9053061 26.7526531,35.7659184 C31.6108163,37.2683673 34.6697959,35.8479592 34.6697959,35.8479592 Z M7.98571429,24.302449 C6.29612245,24.6310204 4.80693878,25.5885714 3.89632653,26.9112245 C3.35204082,26.4573469 2.33816327,25.5785714 2.15897959,25.2361224 C0.705306122,22.4757143 3.74571429,17.1083673 5.86959184,14.077551 C11.1185714,6.58693878 19.3397959,0.917142857 23.1455102,1.94591837 C23.7642857,2.12102041 25.8132653,4.49673469 25.8132653,4.49673469 C25.8132653,4.49673469 22.0091837,6.60755102 18.4812245,9.54979592 C13.727551,13.21 10.1367347,18.5297959 7.98571429,24.302449 Z M10.8246939,36.9697959 C10.5689796,37.0134694 10.3081633,37.0308163 10.045102,37.0244898 C7.50306122,36.9563265 4.75693878,34.667551 4.48408163,31.9534694 C4.18244898,28.9534694 5.71530612,26.6446939 8.42938776,26.0971429 C8.75387755,26.0318367 9.14591837,25.9940816 9.56877551,26.0161224 C11.0893878,26.0993878 13.3304082,27.2669388 13.8422449,30.5797959 C14.2957143,33.5136735 13.5755102,36.5006122 10.8246939,36.9697959 Z M45.2620408,31.657551 C45.2402041,31.5806122 45.0983673,31.0620408 44.9034694,30.4371429 C44.7085714,29.8120408 44.5067347,29.3722449 44.5067347,29.3722449 C45.2885714,28.2016327 45.302449,27.154898 45.1985714,26.5618367 C45.087551,25.8269388 44.7816327,25.2006122 44.164898,24.5532653 C43.5481633,23.9059184 42.2869388,23.2428571 40.5142857,22.745102 C40.3116327,22.6881633 39.6430612,22.5046939 39.5842857,22.4869388 C39.5797959,22.4485714 39.5353061,20.2942857 39.495102,19.3695918 C39.4657143,18.7010204 39.4083673,17.6573469 39.0844898,16.6291837 C38.6985714,15.2379592 38.0261224,14.0204082 37.1869388,13.2414286 C39.5030612,10.8406122 40.9489796,8.19571429 40.9455102,5.92653061 C40.9387755,1.56326531 35.58,0.242857143 28.9761224,2.97755102 C28.9691837,2.98040816 27.5869388,3.56653061 27.5769388,3.57163265 C27.5706122,3.5655102 25.0473469,1.08959184 25.0093878,1.05653061 C17.48,-5.51081633 -6.06102041,20.6557143 1.4655102,27.0108163 L3.11040816,28.4042857 C2.68367347,29.5095918 2.51612245,30.7759184 2.65306122,32.1377551 C2.82877551,33.8867347 3.73102041,35.5632653 5.19326531,36.8585714 C6.58142857,38.0885714 8.40653061,38.8669388 10.177551,38.8655102 C13.1065306,45.615102 19.7987755,49.7557143 27.6453061,49.9887755 C36.0622449,50.2387755 43.1277551,46.2891837 46.0883673,39.1946939 C46.2820408,38.6967347 47.1038776,36.4532653 47.1038776,34.4728571 C47.1038776,32.482449 45.9785714,31.657551 45.2620408,31.657551 L45.2620408,31.657551 Z" id="Fill-21" fill="currentColor" mask="url(#mask-2)"></path>
            </g>
        </g>
    </g>
</svg>
`;

interface Props {
  viewerData?: ViewerData;
}

const HomePage: React.FC<Props> = ({ viewerData }) => {
  const title = 'Backend-as-a-service for frontend developers';
  const description = 'Opt-in forms, contact forms, Stripe payments, and more.';

  return (
    <div>
      <main>
        <HeadMatter title={title} description={description} />
        <div className="bg-gray-900">
          <Header inverted={true} viewerData={viewerData} />

          <div className="mx-auto container pt-16 sm:pt-32 pb-10 sm:pb-24">
            <div className="px-6 mx-auto max-w-5xl">
              <h1 className="pb-8 text-5xl sm:text-6xl font-bold leading-none sm:leading-tighter tracking-tight sm:text-center text-white">
                Backend-as-a-service
                <br />
                for frontend devs
              </h1>

              <div className="max-w-xl mx-auto pb-24 text-xl sm:text-2xl text-gray-500 sm:text-center leading-snug sm:tracking-snug">
                <p className="pb-8">
                  You can accomplish so much with just JavaScript! But sometimes
                  you need a backend, for things like sending emails and
                  collecting payments.
                </p>

                <p>
                  <strong className="mt-4 text-gray-300">
                    StaticKit is a no-code backend, packaged up as plain old
                    JavaScript functions.
                  </strong>
                </p>
              </div>

              <div className="mx-auto max-w-2xl">
                <div className="pb-16">
                  <h2 className="ml-2 pb-4 text-base font-bold flex items-center">
                    <div className="text-xs text-gray-900 mr-2 py-px px-2 bg-yellow-600 rounded-full whitespace-no-wrap">
                      Step 1
                    </div>{' '}
                    <div className="text-yellow-500">
                      Configure your functions
                    </div>
                  </h2>

                  <CodeBlock className="language-json">
                    {stepOne.trim()}
                  </CodeBlock>

                  <p className="px-4 pt-4 text-sm text-gray-500">
                    This is what a
                    <span className="text-xs rounded-full mx-1 py-px px-2 font-bold font-mono bg-gray-800 text-gray-500">
                      statickit.json
                    </span>{' '}
                    file might look like.
                  </p>
                </div>

                <div className="pb-16">
                  <h2 className="ml-2 pb-4 text-base font-bold flex items-center">
                    <div className="text-xs text-gray-900 mr-2 py-px px-2 bg-green-600 rounded-full whitespace-no-wrap">
                      Step 2
                    </div>{' '}
                    <div className="text-green-500">Deploy your config</div>
                  </h2>

                  <CodeBlock className="language-shell">
                    {stepTwo.trim()}
                  </CodeBlock>

                  <p className="px-4 pt-4 text-sm text-gray-500">
                    We'll install a
                    <span className="text-xs rounded-full mx-1 py-px px-2 font-bold font-mono bg-gray-800 text-gray-500">
                      @statickit/functions
                    </span>
                    package with your TypeScript-enabled function definitions.
                  </p>
                </div>

                <div className="pb-16">
                  <h2 className="ml-2 pb-4 text-base font-bold flex items-center">
                    <div className="text-xs text-gray-900 mr-2 py-px px-2 bg-pink-600 rounded-full whitespace-no-wrap">
                      Step 3
                    </div>{' '}
                    <div className="text-pink-500">
                      Call your functions in your JavaScript
                    </div>
                  </h2>

                  <CodeBlock className="language-jsx" highlight="9,10,11">
                    {stepThree.trim()}
                  </CodeBlock>

                  <p className="px-4 pt-4 text-sm text-gray-500">
                    You can call them from React components, or whatever else
                    you are using.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto container pt-16 sm:pt-24">
          <div className="px-6 mx-auto max-w-4xl">
            <h1 className="pb-4 text-4xl sm:text-5xl font-bold leading-tight tracking-tight sm:text-center text-gray-900">
              Powerful functions at your fingertips
            </h1>
            <p className="pb-6 sm:pb-16 text-lg sm:text-xl text-gray-700 sm:text-center mx-auto max-w-2xl">
              We have a growing collection of pre-built serverless functions.
            </p>
          </div>
        </div>

        <div className="mx-auto container pb-8 sm:pb-16 max-w-4xl">
          <div className="flex flex-wrap">
            <div className="p-6 md:w-1/2 lg:w-1/3">
              <div className="pb-3">
                <div className="h-12 w-12">
                  <div dangerouslySetInnerHTML={{ __html: chimp }} />
                </div>
              </div>
              <h3 className="pb-1 text-xl font-semibold text-gray-900">
                Mailchimp
              </h3>
              <p className="text-gray-700">
                Add or update contacts and track automation events in your
                Mailchimp account.
              </p>
            </div>

            <div className="p-6 md:w-1/2 lg:w-1/3">
              <div className="pb-3">
                <img
                  src="/static/stripe-icon.jpg"
                  alt="stripe"
                  className="h-12 w-12 rounded-full"
                />
              </div>
              <h3 className="pb-1 text-xl font-semibold text-gray-900">
                Stripe
              </h3>
              <p className="text-gray-700">
                Create customers, charges, and subscriptions in your Stripe
                account.
              </p>
            </div>

            <div className="p-6 md:w-1/2 lg:w-1/3">
              <div className="pb-3">
                <div className="flex items-center h-12 w-12">
                  <div dangerouslySetInnerHTML={{ __html: optInFormIcon }} />
                </div>
              </div>
              <h3 className="pb-1 text-xl font-semibold text-gray-900">
                Email Notifications
              </h3>
              <p className="text-gray-700">
                Send notification emails—like when someone submits a contact
                form.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto container">
          <div className="max-w-5xl mx-auto px-6 py-20 sm:flex items-center justify-center border-t">
            <div className="mr-6 pb-8 sm:pb-0 text-lg tracking-snug text-gray-700">
              Breathe life into your static site.
            </div>
            <div className="flex-shrink-0">
              <a
                href="https://app.statickit.com/signup"
                className="btn sm:block whitespace-no-break"
              >
                Get started free
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
