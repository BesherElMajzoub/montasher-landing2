import useEmblaCarousel from "embla-carousel-react";
import {
    Lightbulb,
    TrendingUp,
    Smartphone,
    Layout,
    RefreshCw,
    MessageCircle,
    Gift,
    ArrowRight,
    ArrowLeft
} from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";

const slides = [
    {
        id: 1,
        icon: Gift,
        title: "هدية خاصة: سر بسيط يغير مشروعك",
        content: "هل سألت نفسك يوماً: لماذا ينجح منافسوك بينما تعاني أنت لجذب العملاء؟ السر ليس في جودة منتجك فقط، بل في 'الوصول'. إذا كان لديك أفضل منتج في العالم ولا أحد يعرفه، فلن تبيع. خذ نفساً عميقاً واقرأ النصائح التالية بعناية.. قد تكون نقطة التحول لمشروعك.",
        color: "from-purple-500 to-indigo-500"
    },
    {
        id: 2,
        icon: TrendingUp,
        title: "الزوار هم الوقود.. لا توقف المحرك",
        content: "تخيل أن محلك في شارع مهجور. هل ستبيع؟ بالتأكيد لا. موقعك الإلكتروني بدون زوار هو مثل ذلك المحل. الإعلانات ليست 'مصروفاً' بل هي 'استثمار' لجلب الزوار. معادلة النجاح بسيطة: زوار مهتمين + عرض مغري = مبيعات مؤكدة. لا تنتظر العميل، اذهب إليه.",
        color: "from-blue-500 to-cyan-500"
    },
    {
        id: 3,
        icon: Smartphone,
        title: "جوجل وسناب شات.. ثروة في جيبك",
        content: "في السعودية، الجميع يستخدم جوجل للبحث وسناب شات للتسلية. إذا ظهرت للعميل وهو يبحث عن خدمتك في جوجل، فقد كسبت نصف المعركة. وإذا ظهرت له بفيديو جذاب في سناب شات، فقد كسبت اهتمامه. نحن نساعدك لتكون في المكانين، في الوقت المناسب تماماً.",
        color: "from-yellow-500 to-orange-500"
    },
    {
        id: 4,
        icon: Layout,
        title: "صفحة الهبوط.. بائعك الصامت",
        content: "هل تعلم أنك قد تخسر 90% من الزوار إذا كانت صفحتك بطيئة أو معقدة؟ صفحة الهبوط يجب أن تكون مثل البائع المحترف: سريعة، واضحة، وتقنع الزائر باتخاذ إجراء واحد فقط (اتصل أو اطلب الآن). لا تشتت العميل، ركز له الطريق نحو الشراء.",
        color: "from-green-500 to-emerald-500"
    },
    {
        id: 5,
        icon: RefreshCw,
        title: "التحسين المستمر.. سر الاستمرارية",
        content: "أول حملة إعلانية هي مجرد بداية. النجاح الحقيقي يأتي من المراقبة والتحسين. ما الذي نجح؟ ما الذي فشل؟ في 'منتشر' نحن لا ننام بعد إطلاق الحملة. نتابع الأرقام يومياً لنقلل تكلفتك ونزيد أرباحك. التسويق ليس ضربة حظ، بل علم وأرقام.",
        color: "from-red-500 to-pink-500"
    },
    {
        id: 6,
        icon: MessageCircle,
        title: "قوة الواتساب بزنس .. أغلق المبيعات بسرعة",
        content: "العميل السعودي يحب التواصل السريع والشخصي. زر الواتساب في موقعك ليس مجرد أيقونة، بل هو خط مباشر لبناء الثقة وزيادة المبيعات. من خلال الرد السريع والاحترافي، وتقديم النصائح والفوائد بدل البيع المباشر، يمكنك تحويل «المهتم» إلى «عميل دائم». استخدم ميزات واتساب بزنس مثل الردود السريعة والكتالوج لتسهيل التواصل، واجعل الوصول إليك أسهل ما يمكن… وستلاحظ الفرق الحقيقي في نتائجك.",
        color: "from-teal-500 to-green-500"
    },
    {
        id: 7,
        icon: Lightbulb,
        title: "خطوتك القادمة؟ ابدأ الآن",
        content: "المعرفة وحدها لا تكفي، التطبيق هو ما يصنع الفرق. لقد عرفت الآن أهمية الزوار والإعلانات وصفحات الهبوط. هل ستترك هذه المعرفة وتعود كما كنت؟ أم ستأخذ خطوة حقيقية لتغيير مسار مشروعك؟ نحن هنا لنبدأ معك الرحلة، يداً بيد.",
        isCTA: true,
        color: "from-primary to-accent"
    }
];

export default function GiftSection() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        direction: "rtl",
        align: "center"
    });

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(true);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on("select", onSelect);
        return () => { emblaApi.off("select", onSelect); };
    }, [emblaApi, onSelect]);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    const scrollToCTA = () => {
        document.getElementById("contact-cta")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2" />

            <div className="container">
                <div className="text-center mb-12 observe">
                    <div className="inline-block p-3 rounded-full bg-primary/10 mb-4 animate-bounce-subtle">
                        <Gift className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
                        نصيحة من خبير.. <span className="text-primary">هدية لك</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        لأننا نؤمن أن نجاحك هو نجاحنا، جمعنا لك خلاصة خبرتنا في خطوات بسيطة. اقرأها بعناية، فقد تكون بداية انطلاقتك الكبرى.
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Carousel Viewport */}
                    <div className="overflow-hidden px-4" ref={emblaRef}>
                        <div className="flex -ml-4 touch-pan-y">
                            {slides.map((slide, index) => (
                                <div
                                    key={slide.id}
                                    className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_80%] lg:flex-[0_0_60%]"
                                >
                                    <div className={`
                    h-full neo-card p-10 flex flex-col justify-center items-center text-center relative overflow-hidden transition-all duration-500
                    ${selectedIndex === index ? 'scale-100 opacity-100' : 'scale-95 opacity-50 blur-[1px]'}
                  `}>

                                        {/* Active Slide Highlight Border */}
                                        {selectedIndex === index && (
                                            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${slide.color}`} />
                                        )}

                                        <div className={`
                      w-20 h-20 mb-8 rounded-2xl flex items-center justify-center 
                      bg-gradient-to-br ${slide.color} shadow-lg
                    `}>
                                            <slide.icon className="h-10 w-10 text-white" />
                                        </div>

                                        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground leading-tight">
                                            {slide.title}
                                        </h3>

                                        <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                            {slide.content}
                                        </p>

                                        {slide.isCTA && (
                                            <div className="mt-8 animate-fade-in-up">
                                                <Button
                                                    onClick={scrollToCTA}
                                                    size="lg"
                                                    className="neo-button text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl font-bold"
                                                >
                                                    <MessageCircle className="ml-2 h-5 w-5" />
                                                    ابدأ استشارتك المجانية الآن
                                                </Button>
                                            </div>
                                        )}

                                        <div className="mt-8 text-sm font-medium text-muted-foreground/50">
                                            {index + 1} / {slides.length}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center justify-center gap-6 mt-12">
                        <Button
                            variant="outline"
                            size="icon"
                            className="neo-button rounded-full w-14 h-14"
                            onClick={scrollPrev}
                            disabled={!canScrollPrev}
                            aria-label="Previous slide"
                        >
                            <ArrowRight className="h-6 w-6" />
                        </Button>

                        {/* Dots */}
                        <div className="flex gap-2">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    className={`
                    h-3 rounded-full transition-all duration-300 
                    ${index === selectedIndex ? 'w-8 bg-primary' : 'w-3 bg-muted-foreground/30 hover:bg-muted-foreground/50'}
                  `}
                                    onClick={() => emblaApi && emblaApi.scrollTo(index)}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>

                        <Button
                            variant="outline"
                            size="icon"
                            className="neo-button rounded-full w-14 h-14"
                            onClick={scrollNext}
                            disabled={!canScrollNext}
                            aria-label="Next slide"
                        >
                            <ArrowLeft className="h-6 w-6" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
