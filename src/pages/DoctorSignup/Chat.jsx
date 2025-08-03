"use client"

import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
} from "../../components/ui/Card"

import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "../../components/ui/avatar"

import { Button } from "../../components/ui/button"
import {
  Phone,
  Mail,
  CalendarDays,
  MapPin,
  Eye,
  Check,
  X,
} from "lucide-react"

import DocSideBar from "../../components/DocSideBar"


const mockAppointments = [
  {
    id: "1",
    doctorName: "Dr. Susan Mandible",
    qualification: "BDS, MDS - Oral & Maxillofacial Surgery",
    email: "susan.m@example.com",
    phone: "+1234567890",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "2",
    doctorName: "Train Adetoyo",
    qualification: "MBBS, MD - General Medicine",
    email: "train.a@example.com",
    phone: "+1987654321",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "3",
    doctorName: "Wright Thinker",
    qualification: "MD - Cardiology",
    email: "wright.t@example.com",
    phone: "+1122334455",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "4",
    doctorName: "Koroyo Ilia",
    qualification: "MBBS, MS - Orthopaedics",
    email: "koroyo.i@example.com",
    phone: "+1556677889",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "5",
    doctorName: "Victor Thompson",
    qualification: "MD - Paediatrics",
    email: "victor.t@example.com",
    phone: "+1998877665",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "6",
    doctorName: "Vera Ogachi",
    qualification: "MBBS, MD - Dermatology",
    email: "vera.o@example.com",
    phone: "+1231231234",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "7",
    doctorName: "Esther Peterson",
    qualification: "MD - Gynaecology",
    email: "esther.p@example.com",
    phone: "+1456456456",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "8",
    doctorName: "Patience Patrick",
    qualification: "MBBS, MS - General Surgery",
    email: "patience.p@example.com",
    phone: "+1789789789",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "9",
    doctorName: "Train Adetoyo",
    qualification: "MBBS, MD - General Medicine",
    email: "train.a@example.com",
    phone: "+1987654321",
    image: "/placeholder.svg?height=80&width=80",
  },
]

export default function AppointmentsPage() {
  return (
    <>
      {/* Top header background similar to ConsultationPayments */}
      <div
        className="w-full relative text-white px-[4%] lg:px-[7%] md:pt-[10%] pt-[25%] lg:pb-5"
        style={{
          position: "fixed",
          width: "100%",
          backgroundColor: "#021140",
          minHeight: "100px",
          zIndex: 10,
        }}
      >
        <h3 className="pt-3 text-[12px] md:text-[14px]">Home / Appointments</h3>
        <h1 className="text-[22px] md:text-[24px] py-2 font-semibold">Doctor Appointments</h1>
      </div>

      {/* Main Layout with Sidebar */}
      <section className="md:py-[20%] lg:top-[15%] py-[50%] w-full bg-[#e2e2e2]">
        <div className="flex mx-[2%] lg:mx-[3%]">
          {/* Sidebar */}
          <DocSideBar />

          {/* Appointment Cards */}
          <div className="bg-white mx-3 p-5 w-full rounded space-y-6">
            {mockAppointments.map((appointment) => (
              <Card
                key={appointment.id}
                className="flex flex-col md:flex-row items-center justify-between p-6 bg-white rounded-xl shadow-sm gap-6"
              >
                {/* Doctor Info */}
                <div className="flex items-center gap-6 flex-1">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src={appointment.image} alt={appointment.doctorName} />
                    <AvatarFallback>
                      {appointment.doctorName
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <div>
                    <CardTitle className="text-xl text-black">{appointment.doctorName}</CardTitle>
                    <div className="flex items-center text-gray-500 text-sm mt-1">
                      <CalendarDays className="w-4 h-4 mr-1" />
                      {appointment.date}
                    </div>
                    <div className="flex items-center text-gray-500 text-sm mt-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      {appointment.location}
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <CardContent className="flex flex-col gap-2 text-sm text-gray-700 flex-1">
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    {appointment.email}
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    {appointment.phone}
                  </div>
                </CardContent>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="bg-blue-100 text-blue-900 hover:bg-blue-200">
                    <Eye className="w-4 h-4 mr-1" /> View
                  </Button>
                  <Button variant="outline" size="sm" className="bg-green-100 text-green-900 hover:bg-green-200">
                    <Check className="w-4 h-4 mr-1" /> Accept
                  </Button>
                  <Button variant="outline" size="sm" className="bg-pink-100 text-pink-900 hover:bg-pink-200">
                    <X className="w-4 h-4 mr-1" /> Cancel
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
