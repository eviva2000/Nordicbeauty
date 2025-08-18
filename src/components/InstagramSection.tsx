import { SiInstagram } from "react-icons/si";

export default function InstagramSection() {
  return (
    <section className=" py-16 bg-[#f3f4f1] text-[#2f4f4f]">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">ما را در اینستاگرام دنبال کنید</h2>
        <div className="flex flex-col items-center justify-center gap-8">
          <p className="text-lg max-w-2xl">
            برای آشنایی بیشتر با محصولات ما می‌توانید به صفحه اینستاگرام مراجعه کنید. در آنجا تمامی
            اطلاعات مورد نیاز درباره محصولات، به همراه جدیدترین خبرها و به‌روزرسانی‌ها در دسترس شما
            قرار دارد. ما تلاش می‌کنیم همواره تازه‌ترین و کامل‌ترین جزئیات را در اختیار شما بگذاریم
            تا انتخابی آگاهانه و مطمئن داشته باشید
          </p>
          <a
            href="https://www.instagram.com/zibanordic/"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <SiInstagram className="w-16 xl:w-20 h-16 xl:h-20 text-[#2f4f4f] mx-auto mt-8" />
          </a>
        </div>
      </div>
    </section>
  );
}
