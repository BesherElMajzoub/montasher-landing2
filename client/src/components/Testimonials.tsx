import useEmblaCarousel from "embla-carousel-react";
import { Star, ChevronRight, ChevronLeft, Quote } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";

const testimonials = [
    {
        id: 1,
        name: "محمد العتيبي",
        role: "مالك متجر إلكتروني",
        rating: 5,
        text: "تجربة ممتازة مع منتشر. الإعلانات فرقت معي كثير في المبيعات، والزيارات للموقع زادت بنسبة 200% في أول شهر.",
        date: "2024-12-15",
    },
    {
        id: 2,
        name: "سارة العمري",
        role: "مركز تجميل",
        rating: 5,
        text: "كان عندي تخوف في البداية لأن ميزانيتي محدودة، لكن النتائج كانت مبهرة. الجميل أنهم يتابعون الحملة بشكل يومي.",
        date: "2024-12-20",
    },
    {
        id: 3,
        name: "عبدالله القحطاني",
        role: "خدمات صيانة عامة",
        rating: 4,
        text: "خدمة عملاء مميزة، وتقاريرهم واضحة جداً. الإعلانات جودتها عالية وتستهدف العميل الصح. أنصح بالتعامل معهم.",
        date: "2024-11-28",
    },
    {
        id: 4,
        name: "فهد الشمري",
        role: "شركة نقل عفش",
        rating: 5,
        text: "من أفضل شركات التسويق اللي تعاملت معها. مصداقية واحترافية، والأهم إنهم فاهمين السوق السعودي زين.",
        date: "2025-01-02",
    },
    {
        id: 5,
        name: "نورة السبيعي",
        role: "مصممة ديكور داخلي",
        rating: 5,
        text: "الإعلانات جابت لي عملاء جادين بالضبط مثل ما طلبت. شكراً لفريق منتشر على احترافيتهم ودعمهم المستمر.",
        date: "2024-12-10",
    },
    {
        id: 6,
        name: "إدارة مكتب مريم",
        role: "تأجير عاملات بالشهر",
        rating: 5,
        text: "تعاملنا مع \"منتشر\" فرق معنا كثير في طلبات الاستقدام والتأجير. الحملات الإعلانية كانت مدروسة وجابت لنا عملاء جادين، ووفرت علينا جهد كبير في التسويق.",
        date: "2025-01-05",
    },
    {
        id: 7,
        name: "أبو سعود",
        role: "مكتب سداد قروض",
        rating: 5,
        text: "بفضل الله ثم جهود فريق منتشر، قدرنا نوصل لشريحة أكبر من العملاء المحتاجين لخدماتنا. مصداقية في التعامل واحترافية في إدارة الحملات، أنصح أي صاحب مكتب يتعامل معهم.",
        date: "2025-01-04",
    },
    {
        id: 8,
        name: "مدير مكتب سلفة",
        role: "خدمات التمويل",
        rating: 5,
        text: "اللي يميز منتشر هو الفهم العميق للسوق. عرفوا كيف يوصلون رسالتنا للعميل الصح، وزادت نسبة الطلبات عندنا بشكل ملحوظ خلال فترة قصيرة.",
        date: "2025-01-06",
    },
    {
        id: 9,
        name: "المعرض للأثاث (أبو صفاء)",
        role: "شراء أثاث مستعمل",
        rating: 5,
        text: "كنت أعاني عشان أوصل للناس اللي تبي تبيع أثاثها، لكن بعد ما مسكوا منتشر إعلاناتي، الجوال ما يوقف اتصالات. شغل مرتب ونتائج ملموسة.",
        date: "2025-01-03",
    },
    {
        id: 10,
        name: "عالم الديكور",
        role: "تنجيد كنب وستائر",
        rating: 5,
        text: "صور أعمالنا وصلتها منتشر للناس بشكل احترافي جداً. زباين كثير جو عن طريقهم ويمدحون في العروض اللي شافوها. شكراً لكم على الشغل الجبار.",
        date: "2025-01-07",
    },
    {
        id: 11,
        name: "أبو محمد",
        role: "جلي وتلميع بلاط",
        rating: 5,
        text: "من يوم تعاملت معكم والطلب على الخدمات زاد والحمد لله. أقدر التزامكم بالمواعيد وتقاريركم اللي توضح كل ريال وين راح. شريك نجاح حقيقي.",
        date: "2025-01-02",
    },
];

export default function Testimonials() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        direction: "rtl",
        align: "start",
    });
    const [selectedIndex, setSelectedIndex] = useState(0);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on("select", onSelect);

        // Auto-play functionality
        const intervalId = setInterval(() => {
            if (emblaApi.canScrollNext()) {
                emblaApi.scrollNext();
            } else {
                emblaApi.scrollTo(0);
            }
        }, 5000);

        return () => {
            emblaApi.off("select", onSelect);
            clearInterval(intervalId);
        };
    }, [emblaApi, onSelect]);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    // JSON-LD Structured Data
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Product", // Or Service/LocalBusiness depending on context
        "name": "حملات إعلانية من منتشر",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": testimonials.length.toString(),
            "bestRating": "5",
            "worstRating": "1"
        },
        "review": testimonials.map(review => ({
            "@type": "Review",
            "author": {
                "@type": "Person",
                "name": review.name
            },
            "datePublished": review.date,
            "reviewBody": review.text,
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": review.rating.toString(),
                "bestRating": "5"
            }
        }))
    };

    return (
        <section className="py-24 bg-gradient-to-b from-background to-secondary/20 overflow-hidden">
            <script type="application/ld+json">
                {JSON.stringify(jsonLd)}
            </script>

            <div className="container relative">
                <div className="text-center mb-16 observe">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                        عملاؤنا يتحدثون عن نجاحاتهم
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        قصص نجاح حقيقية لشركات وأفراد وثقوا في "منتشر" لتنمية أعمالهم
                    </p>
                </div>

                <div className="relative max-w-6xl mx-auto px-4 sm:px-12">
                    {/* Carousel Viewport */}
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex -ml-4 touch-pan-y">
                            {testimonials.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                                >
                                    <div className="h-full neo-card p-8 flex flex-col relative group hover:z-10 transition-all duration-300">
                                        <div className="absolute top-6 left-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                            <Quote className="h-16 w-16 text-primary" />
                                        </div>

                                        <div className="flex items-center gap-1 mb-4">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`h-5 w-5 ${i < item.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                                                />
                                            ))}
                                        </div>

                                        <p className="text-muted-foreground leading-relaxed mb-8 flex-grow relative z-0">
                                            "{item.text}"
                                        </p>

                                        <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg">
                                                {item.name.charAt(0)}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-foreground text-lg">{item.name}</h4>
                                                <p className="text-sm text-primary font-medium">{item.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-center gap-4 mt-8 md:absolute md:top-1/2 md:-translate-y-1/2 md:w-full md:justify-between md:left-0 md:px-0 pointer-events-none">
                        <Button
                            variant="outline"
                            size="icon"
                            className="neo-button rounded-full w-12 h-12 pointer-events-auto md:-mr-16"
                            onClick={scrollPrev}
                            aria-label="Previous testimonial"
                        >
                            <ChevronRight className="h-6 w-6" />
                        </Button>

                        <Button
                            variant="outline"
                            size="icon"
                            className="neo-button rounded-full w-12 h-12 pointer-events-auto md:-ml-16"
                            onClick={scrollNext}
                            aria-label="Next testimonial"
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </Button>
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === selectedIndex
                                    ? "bg-primary w-8 shadow-lg shadow-primary/30"
                                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                                    }`}
                                onClick={() => emblaApi && emblaApi.scrollTo(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
