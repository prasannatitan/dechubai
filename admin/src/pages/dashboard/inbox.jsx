
import Layout from "../../dashboard/Layout"
import './inbox.css'

const inbox = () => {
    const data = [
        {
            name: "Titan",
            tyofSer: "Branding",
            date: "29/06/2025",
            status: "New",
            remark: "We need to add a new Logo and color scheme for the website"
        },
        {
            name: "Titan",
            tyofSer: "Branding",
            date: "29/06/2025",
            status: "New",
            remark: "We need to add a new Logo and color scheme for the website"
        },
        {
            name: "Titan",
            tyofSer: "Branding",
            date: "29/06/2025",
            status: "New",
            remark: "We need to add a new Logo and color scheme for the website"
        },
        {
            name: "Titan",
            tyofSer: "Branding",
            date: "29/06/2025",
            status: "New",
            remark: "We need to add a new Logo and color scheme for the website"
        },
        {
            name: "Titan",
            tyofSer: "Branding",
            date: "29/06/2025",
            status: "New",
            remark: "We need to add a new Logo and color scheme for the website"
        }
    ]
    return (
        <Layout>
            <div className="p-6">
                <div className="p-6 rounded-xl bg-white">
                    <div className="flex border-b pb-3 table-div">
                        <div>
                            <p className="font-semibold">Project Name</p>
                        </div>
                        <div>
                            <p className="font-semibold">Type of Service</p>
                        </div>
                        <div>
                            <p className="font-semibold">Time Assigned</p>
                        </div>
                        <div>
                            <p className="font-semibold">Status</p>
                        </div>
                        <div>
                            <p className="font-semibold">Remarks Added</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 pt-4">
                        {data.map((itm, idx) => {
                            return (
                                <div key={idx} className="flex table-div items-center">
                                    <div>
                                        <p className="font-semibold">{itm.name}</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold">{itm.tyofSer}</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold">{itm.date}</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold">{itm.status}</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold bg-[#EBDBFF] rounded-xl py-2 px-3">{itm.remark}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </Layout>

    )
}

export default inbox