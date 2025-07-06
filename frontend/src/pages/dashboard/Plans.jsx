import Layout from '../../dashboard/Layout'

const plan = () => {
    const planData = [
        {
            price: "$20",
            name: "Basic Plan",
            text: "New businesses looking for AI-driven branding & marketing automation",
            features: [
                "1 service",
                "AI-Powered Branding Toolkit",
                "Logo, Visual Identity, Brand Guidelines",
                "Social Media Automation",
                "Up to 5 posts/month, AI-generated captions",
                "Smart Content Calendar (AI-suggested posting schedule)",
                "Basic SEO & Performance Analytics"
            ]
        },
        {
            price: "$20",
            name: "Basic Plan",
            text: "New businesses looking for AI-driven branding & marketing automation",
            features: [
                "1 service",
                "AI-Powered Branding Toolkit",
                "Logo, Visual Identity, Brand Guidelines",
                "Social Media Automation",
                "Up to 5 posts/month, AI-generated captions",
                "Smart Content Calendar (AI-suggested posting schedule)",
                "Basic SEO & Performance Analytics"
            ]
        },
        {
            price: "$20",
            name: "Basic Plan",
            text: "New businesses looking for AI-driven branding & marketing automation",
            features: [
                "1 service",
                "AI-Powered Branding Toolkit",
                "Logo, Visual Identity, Brand Guidelines",
                "Social Media Automation",
                "Up to 5 posts/month, AI-generated captions",
                "Smart Content Calendar (AI-suggested posting schedule)",
                "Basic SEO & Performance Analytics"
            ]
        }
    ]
    return (
        <Layout>
            <div className='p-6 w-full flex flex-col gap-5'>
                {planData.map((itm, idx) => {
                    return (
                      <div key={idx} className="border-[rgba(0,0,0,0.1)] border-1 rounded-[22px]">
                          <div  className="relative pl-35 rounded-[22px] shadow-[3px_0px_53.5px_rgba(0,0,0,0.21)] bg-[linear-gradient(131.29deg,#FFFFFF_9.67%,#FFE4E4_106.18%)] p-10">
                          <div
  className="absolute w-[100px] h-full left-0 top-0 opacity-[0.21] blur-[11.1px]"
  style={{
    background:
      'conic-gradient(from 187.27deg at 40.63% 50.41%, rgba(159, 115, 241, 0) -48.92deg, rgba(242, 98, 181, 0) 125.18deg, #5FC5FF 193.41deg, #FFAC89 216.02deg, #8155FF 236.07deg, #789DFF 259.95deg, rgba(159, 115, 241, 0) 311.08deg, rgba(242, 98, 181, 0) 485.18deg)',
  }}
></div>

                            <h1
                                style={{
                                    background: "linear-gradient(174.53deg, #3E0F77 0.59%, #FFB3B3 197.9%, #211331 242.14%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                    color: "transparent"
                                }}
                                className="font-bold text-[64px] leading-[65px]"
                            >
                                {itm.price}
                            </h1>
                            <h2 className="text-[24px] font-bold mt-4">{itm.name}</h2>
                            <p className="text-[16px] text-[ rgba(0,_0,_0,_0.8)] font-semibold">{itm.text}</p>
                            <ul className="list-disc flex flex-col gap-1 mt-5 ml-8">
                            {itm.features.map((feature, index) => {
                                return (
                                   
                                       <li key={index} className='text-[rgba(0,_0,_0,_0.8)] text-[14px] font-semibold'>{feature}</li>
                                    
                                )
                            })}
                            </ul>

                        </div>
                      </div>
                    )
                })}
            </div>
        </Layout>
    )
}

export default plan