/*
  Design Philosophy: Luxury Neomorphism
  - Soft embossed surfaces with dual shadows
  - Royal blue (#2D3E8F) and rose gold (#B8846F) accents
  - Warm off-white background (#F5F3F0)
  - Noto Kufi Arabic for headings, Noto Sans Arabic for body
*/

import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Target, TrendingUp, Users, Award, CheckCircle, BarChart3, Smartphone, Globe, Zap, Shield } from "lucide-react";
import { useEffect, useRef } from "react";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".observe").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const scrollToCTA = () => {
    document.getElementById("contact-cta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <FloatingWhatsApp />
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-30"
          style={{
            backgroundImage: "url(/images/hero-background.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        
        <div className="container relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-right space-y-8 observe">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
                إعلانك الأول في جوجل..
                <span className="block mt-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  يعني العميل يتصل فيك أول
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
                في "منتشر" نضمن ظهورك في صدارة نتائج البحث، ونحوّل الباحثين عن خدمتك إلى عملاء حقيقيين يتصلون بك مباشرة.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end pt-6">
                <Button 
                  onClick={scrollToCTA}
                  size="lg" 
                  className="neo-button text-lg px-8 py-7 bg-primary text-primary-foreground hover:bg-primary/90 rounded-2xl font-semibold"
                >
                  <Phone className="ml-2 h-5 w-5" />
                  أرسل استشارتك من هنا مجاناً
                </Button>
                <Button 
                  onClick={scrollToCTA}
                  size="lg" 
                  variant="outline" 
                  className="neo-button text-lg px-8 py-7 rounded-2xl font-semibold"
                >
                  <MessageCircle className="ml-2 h-5 w-5" />
                  تحدث معنا واتساب
                </Button>
              </div>
            </div>
            
            <div className="observe">
              <div className="neo-card p-4">
                <img 
                  src="/images/google-ads-hero.png" 
                  alt="إعلانات جوجل في الصدارة" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container">
          <div className="text-center mb-16 observe">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              نوصلك بالعميل اللي يدور عليك الحين!
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              مع "منتشر"، إعلانك ما يظهر لأي أحد. نستهدف العميل الجاد اللي يبحث عن خدمتك في جوجل بنفس اللحظة.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="neo-card p-8 text-center observe">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Target className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">العميل يبحث</h3>
              <p className="text-muted-foreground leading-relaxed">
                العميل يكتب في جوجل ويدور على خدمتك بالضبط
              </p>
            </div>

            <div className="neo-card p-8 text-center observe" style={{ animationDelay: "0.1s" }}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                <Zap className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">إعلانك يظهر</h3>
              <p className="text-muted-foreground leading-relaxed">
                إعلانك يطلع له في أول النتائج، قبل أي منافس
              </p>
            </div>

            <div className="neo-card p-8 text-center observe" style={{ animationDelay: "0.2s" }}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Phone className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">يتواصل معك</h3>
              <p className="text-muted-foreground leading-relaxed">
                يتصل فيك مباشرة أو يراسلك واتساب، جاهز للتعامل
              </p>
            </div>
          </div>

          <div className="neo-card p-4 observe">
            <img 
              src="/images/google-search-results.png" 
              alt="رحلة العميل من البحث للتواصل" 
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* Trust Section - Breaking Fears */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="observe">
              <div className="neo-card p-4">
                <img 
                  src="/images/analytics-report.png" 
                  alt="التقرير الإجمالي للحملة التسويقية" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>

            <div className="space-y-6 observe">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                خايف ميزانيتك تضيع بدون فايدة؟
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                هذا أكبر تخوف عند أصحاب الخدمات، وحقك تخاف. لكن مع "منتشر"، كل ريال تصرفه مدروس. نحن لا نطلق الحملات بشكل عشوائي، بل نبنيها على أرقام وبيانات دقيقة لضمان أفضل النتائج.
              </p>

              <div className="neo-card-inset p-8 bg-gradient-to-br from-accent/10 to-primary/10">
                <h3 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-3">
                  <Shield className="h-7 w-7 text-accent" />
                  ميزانية تجريبية
                </h3>
                <p className="text-lg text-foreground leading-relaxed">
                  مانبغاك تخاطر. تقدر تبدأ معنا بميزانية تجريبية <span className="font-bold text-primary text-2xl">800 ريال فقط</span>، تشوف فيها بنفسك كيف نجيب لك اتصالات وعملاء محتملين. الشفافية هي أساس عملنا.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Montasher Section */}
      <section className="py-24 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container">
          <div className="text-center mb-16 observe">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              خبرتنا في السوق السعودي هي اللي تفرق
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="neo-card p-8 observe">
              <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Target className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">استهداف دقيق</h3>
              <p className="text-muted-foreground leading-relaxed">
                نقدر نوصل إعلانك للعملاء في أي مدينة أو حي داخل المملكة بدقة عالية.
              </p>
            </div>

            <div className="neo-card p-8 observe" style={{ animationDelay: "0.1s" }}>
              <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                <Users className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">خبرة بالسوق</h3>
              <p className="text-muted-foreground leading-relaxed">
                فاهمين طريقة تفكير وبحث العميل السعودي، وهذا يخلي إعلاناتنا أكثر فعالية.
              </p>
            </div>

            <div className="neo-card p-8 observe" style={{ animationDelay: "0.2s" }}>
              <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <TrendingUp className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">تحسين مستمر</h3>
              <p className="text-muted-foreground leading-relaxed">
                ما نطلق الحملة وننساها. نراقبها يوميًا ونحسنها عشان نضمن لك أفضل النتائج.
              </p>
            </div>

            <div className="neo-card p-8 observe" style={{ animationDelay: "0.3s" }}>
              <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                <BarChart3 className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">تقارير واضحة</h3>
              <p className="text-muted-foreground leading-relaxed">
                نرسل لك تقارير أسبوعية أو شهرية سهلة وواضحة، تعرف فيها كل ريال وين راح.
              </p>
            </div>

            <div className="neo-card p-8 observe" style={{ animationDelay: "0.4s" }}>
              <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Award className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">عائد أعلى</h3>
              <p className="text-muted-foreground leading-relaxed">
                هدفنا واضح: نقلل تكلفة الإعلان ونزيد أرباحك بشكل ملموس.
              </p>
            </div>

            <div className="neo-card p-8 observe" style={{ animationDelay: "0.5s" }}>
              <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                <Shield className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">شفافية كاملة</h3>
              <p className="text-muted-foreground leading-relaxed">
                لا أسرار ولا رسوم خفية. كل شيء واضح ومباشر من البداية.
              </p>
            </div>
          </div>

          <div className="mt-16 observe">
            <div className="neo-card p-4">
              <img 
                src="/images/saudi-professional.png" 
                alt="رجل أعمال سعودي ناجح" 
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16 observe">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              خدماتنا مصممة عشان تزيد اتصالاتك وأرباحك
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="neo-card p-10 observe">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 flex-shrink-0 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Globe className="h-8 w-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-4 text-foreground">إعلانات جوجل</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    نضمن ظهورك في الصفحة الأولى عندما يبحث العميل عنك. أنت الخيار الأول أمامه، وهذا يعني المزيد من الاتصالات والعملاء المحتملين.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="neo-button px-4 py-2 text-sm rounded-lg">استهداف دقيق</span>
                    <span className="neo-button px-4 py-2 text-sm rounded-lg">نتائج سريعة</span>
                    <span className="neo-button px-4 py-2 text-sm rounded-lg">قياس فوري</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="neo-card p-10 observe" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 flex-shrink-0 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                  <Smartphone className="h-8 w-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-4 text-foreground">إعلانات سناب شات</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    نصمم إعلانات فيديو وصور جذابة توصل لآلاف المستخدمين وتترك انطباع سريع وقوي يدفعهم للتواصل معك.
                  </p>
                  <div className="neo-card-inset p-4 mt-4">
                    <img 
                      src="/images/mobile-ads.png" 
                      alt="إعلانات سناب شات" 
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="neo-card p-10 observe" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 flex-shrink-0 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Globe className="h-8 w-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-4 text-foreground">تصميم صفحات الهبوط</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    نصمم لك صفحة هبوط احترافية ومقنعة تحوّل كل زائر إلى عميل متصل. التصميم والمحتوى كلها مدروسة لزيادة التحويل.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="neo-button px-4 py-2 text-sm rounded-lg">تصميم احترافي</span>
                    <span className="neo-button px-4 py-2 text-sm rounded-lg">محتوى مقنع</span>
                    <span className="neo-button px-4 py-2 text-sm rounded-lg">سريع التحميل</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="neo-card p-10 observe" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 flex-shrink-0 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                  <BarChart3 className="h-8 w-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-4 text-foreground">إدارة الحملات</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    نتولى إدارة حملاتك بالكامل، مع تحسين مستمر لتقليل الهدر وزيادة الكفاءة. أنت تركز على عملك، ونحن نجيب لك العملاء.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="neo-button px-4 py-2 text-sm rounded-lg">متابعة يومية</span>
                    <span className="neo-button px-4 py-2 text-sm rounded-lg">تحسين مستمر</span>
                    <span className="neo-button px-4 py-2 text-sm rounded-lg">تقارير دورية</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-24 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container">
          <div className="text-center mb-16 observe">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              خطوات عملنا.. واضحة ومنظمة
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              { num: "01", title: "جلسة استشارة مجانية", desc: "نفهم فيها طبيعة عملك وأهدافك ونقدم لك خطة أولية." },
              { num: "02", title: "تحليل السوق والمنافسين", desc: "ندرس السوق ونشوف نقاط القوة والضعف ونحدد الفرص." },
              { num: "03", title: "إطلاق الحملة الإعلانية", desc: "نصمم ونطلق حملة إعلانية احترافية ومدروسة بعناية." },
              { num: "04", title: "متابعة وتحسين مستمر", desc: "نراقب أداء الحملة يوميًا ونقوم بالتعديلات اللازمة فورًا." },
              { num: "05", title: "تقارير ونتائج شفافة", desc: "نزودك بتقارير دورية شفافة توضح لك كل شيء بالتفصيل." },
            ].map((step, idx) => (
              <div key={idx} className="neo-card p-8 observe" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 flex-shrink-0 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <span className="text-3xl font-bold text-primary-foreground">{step.num}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-foreground">{step.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expected Results Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16 observe">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              استعد لزيادة الاتصالات والعملاء
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Phone, title: "زيادة الاتصالات", desc: "عدد أكبر من الاتصالات اليومية من عملاء مهتمين" },
              { icon: Users, title: "عملاء جادين", desc: "استقبال استفسارات من عملاء جادين ومستعدين للدفع" },
              { icon: TrendingUp, title: "نمو المبيعات", desc: "نمو ملحوظ في المبيعات والأرباح الشهرية" },
              { icon: Award, title: "تفوق على المنافسين", desc: "تفوق واضح على منافسينك في السوق" },
            ].map((item, idx) => (
              <div key={idx} className="neo-card p-8 text-center observe" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <item.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>


        </div>
      </section>

      {/* Credibility Section */}
      <section className="py-24 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 observe">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                في "منتشر".. نعدك بالواقعية والاحترافية
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: CheckCircle, title: "لا إعلانات عشوائية", desc: "كل حملاتنا مدروسة وموجهة بدقة لتحقيق أهدافك" },
                { icon: Shield, title: "لا استنزاف للميزانية", desc: "نحرص على كل ريال ونسعى لتحقيق أفضل عائد ممكن" },
                { icon: Award, title: "لا وعود وهمية", desc: "نتائجنا تتحدث عنا، ونقدم لك توقعات واقعية" },
              ].map((item, idx) => (
                <div key={idx} className="neo-card p-8 text-center observe" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <item.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact-cta" className="py-24 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center observe">
            <div className="neo-card p-12 bg-gradient-to-br from-primary/5 to-accent/5">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                جاهز تبدأ في استقبال عملاء جدد؟
              </h2>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                لا تأجل نجاحك. فريقنا جاهز لمساعدتك على النمو والانتشار. تواصل معنا الآن واحصل على استشارة مجانية وخطة تسويقية مخصصة لعملك.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="neo-button text-xl px-10 py-8 bg-primary text-primary-foreground hover:bg-primary/90 rounded-2xl font-bold"
                >
                  <Phone className="ml-2 h-6 w-6" />
                  كلمنا الآن
                </Button>
                <Button 
                  size="lg" 
                  className="neo-button text-xl px-10 py-8 bg-accent text-accent-foreground hover:bg-accent/90 rounded-2xl font-bold"
                >
                  <MessageCircle className="ml-2 h-6 w-6" />
                  واتساب
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-secondary/20 border-t border-border">
        <div className="container">
          <div className="text-center space-y-4">
            <h3 className="text-3xl font-bold text-foreground">منتشر</h3>
            <p className="text-lg text-muted-foreground">شريكك للنمو والوصول لأكبر عدد من العملاء في السعودية</p>
            <p className="text-sm text-muted-foreground">© جميع الحقوق محفوظة لشركة منتشر 2025</p>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}
