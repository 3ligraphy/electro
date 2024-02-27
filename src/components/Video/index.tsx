"use client"
import Image from "next/image";
import { useState, useEffect, use } from "react";
import SectionTitle from "../Common/SectionTitle";
import { motion, AnimatePresence } from "framer-motion";
import ModalVideo from "react-modal-video";

const Video = () => {
  const [isOpen, setOpen] = useState(false);
  const [showFullContent, setShowFullContent] = useState(false);
  useEffect(() => {
    console.log(researchContent.divineReference)

  }, [])
  const researchContent = {
    introduction:
      "    نحن نعيش حياتنا كلها محاطة بها. إنها تصطدم بنا باستمرار بسرعة تزيد عن 700 ميل في الساعة، وأحيانا تؤلمنا، وأحيانا تهدئنا. لديها القدرة على توصيل الأفكار، وحتى أنها تسبب أضرارا جسدية.  وبالفعل هي جزء كبير من حياتنا اليومية. إنها الموجات الصوتية. إذن، ما هي الموجات الصوتية وكيف تعمل؟ وما اضرارها؟     ,"
    , divineReference: (
      <p>
        وقد قال الله تعالى في آية 19 من سورة البقرة: (أَوْ كَصَيِّبٍ مِّنَ السَّمَاءِ فِيهِ ظُلُمَاتٌ وَرَعْدٌ وَبَرْقٌ يَجْعَلُونَ أَصَابِعَهُمْ فِي آذَانِهِم مِّنَ الصَّوَاعِقِ حَذَرَ الْمَوْتِ ۚ وَاللَّهُ مُحِيطٌ بِالْكَافِرِينَ (19))
      </p>
    ),
    soundWaves: (
      <p>
        الموجات الصوتية هي نوع من الطاقة التي تنطلق عندما يهتز الجسم. تنتقل هذه الموجات الصوتية من مصدرها عبر الهواء أو أي وسيط آخر ، وعندما تتلامس مع طبلة الأذن ، تترجم أدمغتنا موجات الضغط إلى كلمات أو موسيقى أو إشارات يمكننا فهمها.
      </p>
    ),
    researchTopic:
      (
        <p>
          اصبحت الحياة الحديثة أكثر انشغالا وضوضاء في السنوات الأخير يؤدي التلوث الضوضائيNoise Pollution)) إلى العديد من الآثار الضارة على صحة الإنسان، وأهمها ضعف السمع والإصابة بأمراض القلب والتعرض لاضطرابات النوم وأيضا الأضرار النفسية والشعور المستمر بالإجهاد. (2)
          التداخل هو السمة المميزة للموجات، وكلها تظهر تداخلا بناء وهداما مشابها تماما لتلك التي تظهر لموجات الماء ، الصوت كونه موجة ، نتوقع أن يظهر تداخلا بناء وهدام ايضا.
          يعد التفكير في تطبيقات واسعة النطاق للحد من الضوضاء النشطة عن طريق التداخل المدمر(الهدام) استخداما ذكيا للتداخل الصوتي لإلغاء الضوضاء.. (3)
          ولقد نفذ العلماء سلسله من البحوث والاعمال المبتكرة التي تهدف لتطور تقنية إلغاء الضوضاء على مر السنين..

        </p>
      ),

    interferenceApplication: "        التداخل هو السمة المميزة للموجات، وكلها تظهر تداخلا بناء وهداما مشابها تماما لتلك التي تظهر لموجات الماء. الصوت كونه موجة، نتوقع أن يظهر تداخلا بناء وهداما أيضا. يعد التفكير في تطبيقات واسعة النطاق للحد من الضوضاء النشطة عن طريق التداخل المدمر (الهدام) استخداما ذكيا للتداخل الصوتي لإلغاء الضوضاء.    "


    ,
    noiseCancellationResearch: (
      <p>
        ولقد نفذ العلماء سلسلة من البحوث والأعمال المبتكرة التي تهدف لتطوير تقنية إلغاء الضوضاء على مر السنين.
      </p>
    ),
    waveDefinition: (
      <p>
        الموجة هي الاضراب الذي ينتقل في اتجاه معين بسرعة معينة ولا يستلزم ذلك انتقال جزيئات الوسط الذي تسري فيه الموجة.
      </p>
    ),
    waveLength: (
      <p>
        يتم تعريف الطول الموجي بالإنجليزيّة Wavelength)) على أنه المسافة بين نقطتين متقابلتين لموجتين متتاليتين، وفي الموجات الطولية كموجات الصوت يُمكن قياس طول الموجة من خلال قياس المسافة بين منطقة الانضغاط إلى الانضغاط الذي يليه، أو من منطقة التخلخل إلى التخلخل الذي يليها، ويُرمز إلى الطول الموجي بالحرف اليوناني لامدا (λ) وهو يساوي سرعة الموجة (v) مقسومًا على التردد، أي: الطول الموجي λ = v/f[١]          </p>
    ),
    waveAmp: (
      <p>
        تُعرف سعة الموجة (بالإنجليزيّة: Wave amplitude) على أنها المسافة القصوى التي يُمكن قياسها من نقطة السكون للموجة عند مرورها عبر الوسط، ويتم قياسها في الموجات الطولية كموجات الصوت وهي التي تحرّك جزيئات الوسط ذهابًا وإيابًا في نفس اتجاه انتشار الموجة عن طريق حساب المسافة ما بين جزيئات الوسط بعد أن يتم ضغطها بواسطة الموجة، وكلما كان الجزيئات أقرب إلى بعضها زاد مقدر اتساع الموجة الصوتية. [١]      </p>
    ),
    waveFreq: (
      <p>
        يُمكن تعريف التردد بالإنجليزيّة: Frequency)أي أنه عدد الموجات التي تمر بمكان ثابت في وحدة الزمن، ويتم قياس التردد حسب النظام العالمي للوحدات بالهيرتز (Hertz-Hz) نسبة إلى العالم الألماني هينريش رودولف هيرتز (Heinrich Rudolf Hertz)، أما عن العلاقة بين التردد والطول الموجي فهي علاقة عكسية؛ فالتردد يساوي سرعة الموجة مقسومة على الطول الموجي؛ أي: التردد = سرعة الموجة/الطول الموجي، وبالرموز f = v/λ. [١]      </p>
    ),
    Propagationvelocity: (
      <p>
        تعرّف سرعة انتشار الموجة: (Propagation velocity) على أنها المسافة التي تقطعها الموجات الصوتية خلال وسط ما في الثانية الواحدة، وتعتمد سرعة الانتشار على الوسط التي تعبر من خلاله، حيث إن الموجات الصوتية ذات التردد نفسه تعبر الأوساط المختلفة بسرعات مختلفة، أما في الوسط الواحد فإن الموجات ذات الترددات المختلفة تعبر بنفس السرعة.[١]
        وبشكل عام يمكن حساب سرعة انتشار الموجة عبر حساب حاصل ضرب ترددها بطولها الموجي: أي أنّ: سرعة الموجة الصوتية = تردد الموجة×الطول الموجي للموجة، وبالرموز: v = f×λ، ويوضح الجدول الآتي سرعة موجة الصوت عبر الأوساط المختلفة:[١]
      </p>
    ),
    typesofWaves:
    {
      longWave: (
        <p>
          وفيها يتم تذبذب جزيئات الوسط حول مواضع اتزانها في اتجاه انتشار الحركة الموجية والتي تتكون من تضاغطاتٍ وتخلخلاتٍ كما يحدث عند انتقال موجات الصوت في  بعض المواد كالماءِ والهواءِ أو أي مادةٍ سائلةٍ أو غازيةٍ        </p >
      ),
      TransverseWaves: (
        <p>
          هو ارتباطٌ قويٌّ بين جزيئات الوسط الناقل التي تهتز إلى الأعلى والأسفل عموديًا علي خط انتشار الموجة
          بالأوساط الصلبة كما لدينا من المواد التي تَصدر منها الأصوات الكائناتُ الحية كالحبالِ الصوتيةِ لشخصٍ أو أي شيءٍ يسببُ الاهتزاز كالهاتف

        </p>
      )

    }
    ,
    categorizingSoundWaves:
    {
      Title: {
        t: "تصنيفات الموجات الصوتيّة",
        sub:
          (
            <p>
              تنقسم الموجات الصوتية إلى ثلاثة تصنيفات وفقاً لتردداتها، وهي كالتالي:                </p >
          )
      },
      hearedWaves: (
        <p>
          وهي الموجات الّتي تتراوح تردداتها ما بين 20-20.000 هيرتز، وتشمل جميع الأصوات التي يمكن سماعها بواسطة الأذن البشرية.            </p >
      ),
      overHearedWaves: (
        <p>
          هي تلك الموجات الّتي يرتفع ترددها فوق الـ20 ألف هيرتز والتي تتمحور خارج نطاق حاسة الأذن البشرية، وتدخل في عدة استخدامات كالتطبيقات الصناعية والطبية. الموجات
        </p>
      ),
      UnderHearedWaves: (
        <p>
          هي تلك الموجات الصوتية الّتي ينخفض ترددها عن 20 هيرتزاً، أي لا يمكن للإنسان سماعها أو حتى الإحساس بها
        </p>
      ),

    }
    ,
    waveInterference:
    {
      Title: {
        t: "تداخل الموجات الصوتية",
        sub:
          (
            <p>
              التداخل هو تراكب موجتين أو أكثر لهما نفس التردد والسعة واتجاه الانتشار
              . والتداخل اما ان يكون تداخلا بناء أي تقوية للشدة نتيجة لتداخل قمتين، أو يكون تداخلا هداما نتيجة لتداخل قمة و قاع بمعني اضعاف الشدة أو انعدامها..
            </p >
          )
      },
      constructive: {
        Title: {
          t: "التداخل البناءً",
          sub:
            (
              <p>
                عندما تجتمع موجتان في نفس الطور مع بعضهما البعض، وتكون السعة الناتجة عن هذا التداخل أكبر من السعة الأصلية للموجة الفردية، فإذا تداخلت موجتان متساويتان في السعة تداخلًا بناءً؛ فإن السعة الناتجة عن هذا التداخل تكون ضعف السعة الفردية للموجة (أي أن السعة الناتجة= 2× السعة الأصلية)، وعليه فإن التداخل البناء يزيد من السعة بشكلٍ كبير.
              </p >
            )
        }
      },
      distructive: {
        Title: {
          t: "التداخل الهدام",
          sub:
            (
              <p>
                يحدث التداخل الهدام او التداخل المدمر عندما تتداخل موجتان، وتقوم كل منهما بإلغاء الأخرى بشكلٍ كلي أو بشكلٍ جزئي، ولكي يحدث هدم يجب على الموجتين أن يكون لهما نفس السعة؛ ولكن يكون اتجاه كل منهما عكس اتجاه الأخرى بالتالي عندما تتداخلان تنتج سعة صفرية، وذلك لأنهما ألغيا بعضهما البعض,
              </p >
            )
        }
      },
    },
    tools:
    {
      Title: {
        t: "المواد و الادوات",
        sub:
          (
            <p>
              انبوبه كوينك تحتوي على جزء ثابت واخر متحرك ويوجد بها فتحتين أحدهما مدخل للصوت يوضع عندها مصدر صوتي واخري مخرج موجات الصوت المتداخلة تم وضع لاقط للصوت موصل بالهاتف للاتصال بتطبيق راسم الذبذبات والذي يقوم أيضا بقياس تردد المصدر الصوتي (sound Analysis Oscilloscope)
            </p >
          )
      }
    },
    steps:
    {
      Title: {
        t: "خطوات التجربة",
        sub:
          (
            <p>
              1- نقوم بأرسال الموجة الصوتية أحادية التردد وتحريك الجزء المتحرك للأنبوبة واستقبال التداخل البناء (تقويه للصوت) حيث يرسم راسم الذبذبات اكبر سعه للموجه
              2- نحرك الجزء المتحرك حتى نحصل على التداخل الهدام (ضعف او انعدام الصوت) يرسم راسم الذبذبات اقل سعة الانعدام للموجه
              3- نكرر التجربة مع قياس طول الانبوبة في كل مرة
            </p >
          )
      }
    },
    results:
    {
      Title: {
        t: "النتائج",
        sub:
          (
            <p>
              عند ارسال الموجات الصوتية سينقسم الصوت إلى جزئيين بحيث تمر نصف الشدة خلال الجزء العلوي ويمر النصف المتبقي خلال الأنبوبة السفلية، ومعنى ذلك أن كل أنبوبة تحمل نصف كمية الصوت، وهذا الصوت عبارة عن حركة موجية في الهواء تتكون من سلسلة من التضاغطات والتخلخلات.
              وفي نهاية الأمر تتحد الموجتان الصوتيان عند المخرج بالجانب الأيمن D حيث يوضع مكشاف صوتي كالأذن أو الميكروفون. ويمكن ان يكون الصوت المنبعث عند D جهيزاً او ضعيفاً حسب موضع الأنبوبة العليا FAF. علاوة على ذلك، إذا رفعت هذه الأنبوبة .
            </p >
          )
      },
      reasons: {
        t: " أسباب هذه الظاهرة التي تعرف باسم التداخل.",
        sub:
          (
            <p>
              عندما ينضغط الهواء نتيجة لحركة السماعة إلى اليمين تتكون منطقة ذات ضغط مرتفع ( تضاغط) في الانبوبة عند C، وهذا التضاغط يؤدي إلى تحرك تضاغطين في كلا الأنبوبتين، واحد تجاه A والآخر تجاه B. معنى ذلك بأسلوب آخر أن التضاغط الأصلي عند C ينقسم إلى جزئيين متساويين، وان احدهما يتحرك إلى أعلى تجاه A بينما يتحرك الآخر إلى أسفل تجاه B. وحيث ان التضاغطات، الممثلة في الشكل بالنقط الحمراء، تتحرك في الأنبوبتين بسرعة الصوت، فغن هذين التضاغطين سوف يصلان إلى النقطة D في نفس اللحظة، بشرط أن يكون طول الأنبوبة LA من C إلى D مروراً بالنقطة A مساوياً لطول الانبوبة LB من C إلى D مروراً بالنقطة B. وعند النقطة D يتحد التضاغطان مرة اخرى ليتكون بذلك التضاغط الأصلي الذي يخرج من الأنبوبة عند D. لاحظ أن النقط الخضراء تمثل التخلخلات.الشكل (1 أ)

              ننظر الآن إلى الشكل (1 ب)، حيث زيد طول المسار CAD بتحريك الجزء العلوي من الانبوبة إلى أعلى مبتعداً عن المصدر والمكشاف. لنفرض الآن أن المسار العلوي أطول من السفلي بمقدار نصف الطول الموجي. في هذه الحالة سوف يتبقى على نصف االتضاغط المتحرك من C إلى D عن طريق المسار العلوي ان يقطع مسافة قدرها نصف الطول الموجي كي يصل إلى D بعد أن يكون توأمه قد وصل بالفعل إلى D عن طريق المسار السفلي، وهذا يعني ان الموجة المتحركة في المسار العلوي تصل إلى D متفاوتة في الطور بمقدار نصف دورة مع الموجة المتحركة في المسار السفلي، أي أن تضاغط إحدى الموجات تلتقي دائماً مع تخلخل الأخرى عند هذه النقطة. والنتيجة الحتمية لذلك بقاً لمبدأ التراكب أن تتلاشى السعتان إحداهما مع الأخرى ، ولن يكشف أي صوت عند D.هذا الموقف مثال للتداخل الهدام .
              ويمكن تعميم هذه النتائج بملاحظة أن التداخل البنائي يحدث مرة أخرى عندما يزيد طول الانبوبة العلوية عن السفلية بمقدار طول موجي كامل.. إذن :
              LA = LB ± nλ حيث n = 1,2,3,…….
              للتداخل البنائي (للصوت الجهير).
              وبنفس الأسلوب يمكننا استنتاج الشرط العام للتداخل الهدمي، إذ يحدث التداخل الهدمي دائماً طالما كان الفرق بين مساري الموجتين المتداخلتين عند موضع التداخل عدداً صحيحاً من أنصاف الطول الموجي، إذن:
              LA = LB ± nλ/2    حيث n = 1,2,3,…….
              للتداخل الهدمي (لا صوت) تكون الموجات خارج الطور بمقدار 180 درجة( πراد) والنتيجة هي التداخل  الهدام. يمكن تحديد هذه النقاط باستخدام مقياس شدة مستوى الصوت.
            </p >
          ),
        img: "/img5.jpg"
      }
    },
    notes:
    {
      Title: {
        t: "الملاحظات",
        sub:
          (
            <p>
              لاحظنا من خلال نتائج التجارب الاتي :-

              ليس من الضروري أن يكون لدينا نظاماً انبوبياً لكي يحدث التداخل، غذ أن كل ما نحتاجه هو الحصول على موجتين متماثلتين تماماً في التردد والشكل. فإذا اتحدت هاتان الموجتان بعد قطعهما مسافتين مختلفتين فإنهما سوف تتداخلان أحدهما مع الأخرى
            </p >
          ),
        img: "/img6.jpg"
      },
      reasons: {
        t: " أسباب هذه الظاهرة التي تعرف باسم التداخل.",
        sub:
          (
            <p>
              عندما ينضغط الهواء نتيجة لحركة السماعة إلى اليمين تتكون منطقة ذات ضغط مرتفع ( تضاغط) في الانبوبة عند C، وهذا التضاغط يؤدي إلى تحرك تضاغطين في كلا الأنبوبتين، واحد تجاه A والآخر تجاه B. معنى ذلك بأسلوب آخر أن التضاغط الأصلي عند C ينقسم إلى جزئيين متساويين، وان احدهما يتحرك إلى أعلى تجاه A بينما يتحرك الآخر إلى أسفل تجاه B. وحيث ان التضاغطات، الممثلة في الشكل بالنقط الحمراء، تتحرك في الأنبوبتين بسرعة الصوت، فغن هذين التضاغطين سوف يصلان إلى النقطة D في نفس اللحظة، بشرط أن يكون طول الأنبوبة LA من C إلى D مروراً بالنقطة A مساوياً لطول الانبوبة LB من C إلى D مروراً بالنقطة B. وعند النقطة D يتحد التضاغطان مرة اخرى ليتكون بذلك التضاغط الأصلي الذي يخرج من الأنبوبة عند D. لاحظ أن النقط الخضراء تمثل التخلخلات.الشكل (1 أ)

              ننظر الآن إلى الشكل (1 ب)، حيث زيد طول المسار CAD بتحريك الجزء العلوي من الانبوبة إلى أعلى مبتعداً عن المصدر والمكشاف. لنفرض الآن أن المسار العلوي أطول من السفلي بمقدار نصف الطول الموجي. في هذه الحالة سوف يتبقى على نصف االتضاغط المتحرك من C إلى D عن طريق المسار العلوي ان يقطع مسافة قدرها نصف الطول الموجي كي يصل إلى D بعد أن يكون توأمه قد وصل بالفعل إلى D عن طريق المسار السفلي، وهذا يعني ان الموجة المتحركة في المسار العلوي تصل إلى D متفاوتة في الطور بمقدار نصف دورة مع الموجة المتحركة في المسار السفلي، أي أن تضاغط إحدى الموجات تلتقي دائماً مع تخلخل الأخرى عند هذه النقطة. والنتيجة الحتمية لذلك بقاً لمبدأ التراكب أن تتلاشى السعتان إحداهما مع الأخرى ، ولن يكشف أي صوت عند D.هذا الموقف مثال للتداخل الهدام .
              ويمكن تعميم هذه النتائج بملاحظة أن التداخل البنائي يحدث مرة أخرى عندما يزيد طول الانبوبة العلوية عن السفلية بمقدار طول موجي كامل.. إذن :
              LA = LB ± nλ حيث n = 1,2,3,…….
              للتداخل البنائي (للصوت الجهير).
              وبنفس الأسلوب يمكننا استنتاج الشرط العام للتداخل الهدمي، إذ يحدث التداخل الهدمي دائماً طالما كان الفرق بين مساري الموجتين المتداخلتين عند موضع التداخل عدداً صحيحاً من أنصاف الطول الموجي، إذن:
              LA = LB ± nλ/2    حيث n = 1,2,3,…….
              للتداخل الهدمي (لا صوت) تكون الموجات خارج الطور بمقدار 180 درجة( πراد) والنتيجة هي التداخل  الهدام. يمكن تحديد هذه النقاط باستخدام مقياس شدة مستوى الصوت.
            </p >
          ),
        img: "/img5.jpg"
      }
    },
    conclusioAndApply:
    {
      Title: {
        t: "الاستنتاج و التطبيق"
      },
      subt1: {
        t: "يتم استخدام التداخل في عدة مجالات، بما في ذلك:",
        sub:
          (
            <p>
              1. الصوتيات والموسيقى: يستخدم التداخل البنائي في صناعة الموسيقى والتسجيلات الصوتية لإنشاء تأثيرات مختلفة. يتم استخدامه لإضافة عمق وتأثيرات ثلاثية الأبعاد للصوت، وخلق مؤثرات صدى ورنين وتوسيع المساحة الصوتية.
              2. الصوت المحيطي: يستخدم التداخل البنائي في تقنيات الصوت المحيطي مثل Dolby Atmos وDTS:X. يتم استخدامه لتوزيع الصوت في المساحة بطريقة تعطي الاحساس بالانغماس الصوتي والواقعية العالية.
              3. الاتصالات: في مجال الاتصالات والهواتف المحمولة، يتم استخدام التداخل افي تقنيات إلغاء الضوضاء لتحسين جودة الصوت وتقليل التشويش والضوضاء المحيطة.
              4. الطب: يتم استخدام التداخل البنائي في تقنيات التصوير الطبي مثل الأشعة التصويرية والموجات فوق الصوتية لإنتاج صور ثلاثية الأبعاد وتحسين وضوح الصورة.
              5. الأنظمة الأمنية: يستخدم التداخل البنائي في أنظمة الأمان والمراقبة الصوتية لتسجيل وتحليل الأصوات وتحديد مصادر الصوت وتحسين جودة التسجيل.
            </p >
          )
      },
      subt2: {
        t: "كيف تم تطبيق ظاهرة التداخل الهدام لموجات الصوت  لالغاء الضوضاء",

      },
      subt3: {
        t: "مفهوم التلوث الضوضائي",
        sub: (
          <p>
            هو تلوث جوي اهتزازي يصدر على شكل موجات وهو مجموعه من الأصوات المزعجة غير المرغوب في سماعها
          </p>
        )
      },
      subt4: {
        t: "معدل الضوضاء المقرر عالميا",
        sub: (
          <p>
            يقاس مستوي شدة الصوت بوحدة (الديسيبل )
            1- من( 20-35) ديسيبل مقبول في مناطق المستشفيات
            2- من (30-40) ديسيبل مقبول في المناطق التعليمية
            3- من (23 -40) ديسيبل مقبول في المناطق السكنية
            4- من(30-60) ديسيبل مقبول في المناطق التجارية
            5- من (40-60) ديسيبل مقبول في المناطق الصناعية
            تستخدم بعض أنواع سماعات الرأس ظاهرة التداخل البناء والمدمر لإلغاء الضوضاء الخارجية من الممكن تقليل مستويات الضوضاء بمقدار 30 ديسيبل  أو أكثر باستخدام هذه التقنية حيث يتم إجراء تحليل إلكتروني سريع.يتم تقديم صوت ثان مع الحد الأقصى والحد الأدنى معكوس تماما من الضوضاء الواردة. الموجات الصوتية
          </p>
        ),
        img: "/img6.jpg"
      },
      subt5: {
        t: "الايجابيات",
        sub: (
          <p>
            •	التركيز أكثر في المحتوى المسموع لجودة صوت أعلى وأكثر دقة.
            •	مفيدة جدًا خاصة في ظروف مثل رحلات السفر حيث تساعد المستخدم على الحصول على مزيد من الخصوصية والاسترخاء.
          </p>
        ),
      },
      subt6: {
        t: "السلبيات",
        sub: (
          <p>
            •	قد يكون استخدام هذه التقنية خطرًا حقيقيًا على مستخدميها في حال استخدامها أثناء مرورهم في الشارع لأنها قد تعزل أصوات السيارات خاصة في حال كان المستخدم يستمع بصوت عالي أو إلى موسيقى صاخبة.
            •	التركيز الكبير في الموسيقى والانعزال عن العالم الخارجي قد يؤدي أيضًا إلى مشاكل حقيقية في السمع
          </p>
        ),
      },
      subt7: {
        t: "التطبيق",
        sub: (
          <p>
            وجود تطبيقات الذكاء الاصطناعي للإلغاء الضوضاء اثناء اجراء المكالمات الهاتفية والاجتماعات عبر الانترنت          </p>
        ),
      },
      subt8: {
        t: "التوصيات",
        sub: (
          <p>
            نتمني  انتشار أنظمة الغاء الضوضاء علي مستوي المدارس والمصانع ومناطق العمل لتوفير بيئه جيده واكثر راحه                 </p>
        ),
      },

    },
    thanks:
    {
      Title: {
        t: "الشكر",
        sub:
          (
            <p>
              •	نشكر كل من ساعدنا في هذا البحث العلمي هذا العمل إلى كل شخص أحب العمل بإخلاص وسعى من أجله وكان صاحب مبدأ تبني العلم منهاجا، فكان منبع الاستزادة الذي لا ينقطع لطالبيه .
              •	نشكر والدينا لمساعدتنا في شراء الادوات اعطاء التوجيهات والنصح حتي انتهينا من اجراء البحث.
              •	نشكر المشرفة على البحث أ/ هبة عبد المجيد لما قدمته لنا من ارشادات خلال فتره البحث.
              •	نشكر الدكتور رواق العنزي ابقسم الفيزياء كلية العلوم جامعه الكويت التي حاولت مساعدتنا في موضوع البحث
              •	نشكر معلمات الحاسوب استاذه هويدا واستاذه عائشة على اثراءنا معلومات حول برامج الذكاء الاصطناعي..
              •	نشكر رئيسه قسم الكمياء والفيزياء لما قدمته لنا من دعم معنوي.
              •	ونشكر مديرتنا الحبيبة استاذه اعتدال المحيني لما قدمته لنا من دعم معنوي وتشجيع.
              •	واخيرا وليس اخرا نشكر التوجيه الفني للعلوم على اعطائنا الفرصه وللتجريب والبحث والاطلاع على ما هو جديد لقد استفدنا الكثير من خلال البحث واجراء التجارب لقد كانت تجربه مثيره وشيقه لنا .
            </p >
          )
      }
    },




  };



  // Truncate the content for initial display
  const truncatedContent = `    نحن نعيش حياتنا كلها محاطة بها. إنها تصطدم بنا باستمرار بسرعة تزيد عن 700 ميل في الساعة، وأحيانا تؤلمنا، وأحيانا تهدئنا. لديها القدرة على توصيل الأفكار، وحتى أنها تسبب أضرارا جسدية.  وبالفعل هي جزء كبير من حياتنا اليومية. إنها الموجات الصوتية. إذن، ما هي الموجات الصوتية وكيف تعمل؟ وما اضرارها؟     , ${researchContent.divineReference.props.children}`;



  return (
    <AnimatePresence>

    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 }}
    >
      <section className="relative z-10 py-16 md:py-20 lg:py-28">
        <div className="container flex flex-wrap items-center">
          {/* Left Column */}
          <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
            <div
              className="mx-auto max-w-[770px] overflow-hidden rounded-md relative"
              data-wow-delay=".15s"
              style={{
                height: showFullContent ? 'auto' : '400px', // Adjusted height
                overflow: 'hidden',
              }}
            >
              <div className="aspect-[77/40] items-center justify-center">
                <Image src="/COVER.jpg" alt="video image" fill />
                <div className="absolute right-0 top-0 flex h-full w-full items-center justify-center">
                  <button
                    aria-label="video play button"
                    onClick={() => setOpen(true)}
                    className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-75 text-primary transition hover:bg-opacity-100"
                  >
                    <svg
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      className="fill-current"
                    >
                      <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2 px-4">
            <div className="text-right">
              {showFullContent ? (
                <div>
                  <SectionTitle
                    title="المقدمة"
                    paragraph={truncatedContent}
                    center
                    mb="80px"
                  />
                  <SectionTitle
                    title="كيفيه اختيار موضوع البحث"
                    paragraph={researchContent.researchTopic.props.children}
                    center
                    mb="80px"
                    sub
                  />
                  <SectionTitle
                    title="ما هي الموجة؟"
                    paragraph={researchContent.waveDefinition.props.children}
                    center
                    mb="80px"
                    sub
                  />
                  <SectionTitle
                    title="كيف تعمل الموجات الصوتية؟"
                    paragraph={researchContent.soundWaves.props.children}
                    center
                    mb="80px"
                    sub
                    img="/img1.jpg"
                    vid="/wavesdoc.mp4"

                  />
                  <SectionTitle
                    title="أنواع الموجات الصوتية"
                    paragraph={""}
                    center
                    mb="40px" />
                  <SectionTitle
                    title="الموجات الطولية"
                    paragraph={researchContent.typesofWaves.longWave.props.children}
                    center
                    mb="80px"
                    sub
                    img="/img2.png"
                  />
                  <SectionTitle
                    title="الموجات المستعرضة"
                    paragraph={researchContent.typesofWaves.TransverseWaves.props.children}
                    center
                    mb="80px"
                    sub
                    img="/img3.jpg"
                  />
                  <SectionTitle
                    title="سعة الموجة"
                    paragraph={researchContent.waveAmp.props.children}
                    center
                    mb="80px"
                    sub
                  />
                  <SectionTitle
                    title="الطول الموجي"
                    paragraph={researchContent.waveLength.props.children}
                    center
                    mb="80px"
                    sub
                  />
                  <SectionTitle
                    title="تردد الموجة"
                    paragraph={researchContent.waveFreq.props.children}
                    center
                    mb="80px"
                    sub
                  />
                  <SectionTitle
                    title="سرعة انتشار الموجة الصوتيه"
                    paragraph={researchContent.Propagationvelocity.props.children}
                    center
                    mb="80px"
                    sub
                    img="/img4.jpg"
                  />
                  <SectionTitle
                    title={researchContent.categorizingSoundWaves.Title.t}
                    paragraph={researchContent.categorizingSoundWaves.Title.sub.props.children}
                    center
                    mb="40px"
                  />
                  <SectionTitle
                    title="الموجات المسموعة"
                    paragraph={researchContent.categorizingSoundWaves.hearedWaves.props.children}
                    center
                    mb="40px"
                    sub
                  />
                  <SectionTitle
                    title="الموجات فوق السمعية"
                    paragraph={researchContent.categorizingSoundWaves.overHearedWaves.props.children}
                    center
                    mb="40px"
                    sub
                  />
                  <SectionTitle
                    title="الموجات دون السمعية"
                    paragraph={researchContent.categorizingSoundWaves.UnderHearedWaves.props.children}
                    center
                    mb="40px"
                    sub
                  />
                  <SectionTitle
                    title={researchContent.waveInterference.Title.t}
                    paragraph={researchContent.waveInterference.Title.sub.props.children}
                    center
                    mb="40px"

                  />
                  <SectionTitle
                    title={researchContent.waveInterference.constructive.Title.t}
                    paragraph={researchContent.waveInterference.constructive.Title.sub.props.children}
                    center
                    mb="40px"
                    sub
                  />
                  <SectionTitle
                    title={researchContent.waveInterference.distructive.Title.t}
                    paragraph={researchContent.waveInterference.distructive.Title.sub.props.children}
                    center
                    mb="40px"
                    sub
                  />
                  <SectionTitle
                    title={researchContent.tools.Title.t}
                    paragraph={researchContent.tools.Title.sub.props.children}
                    center
                    mb="40px"
                  />

                  <SectionTitle
                    title={researchContent.steps.Title.t}
                    paragraph={researchContent.steps.Title.sub.props.children}
                    center
                    mb="40px"
                  />
                  <SectionTitle
                    title={researchContent.results.Title.t}
                    paragraph={researchContent.results.Title.sub.props.children}
                    center
                    mb="40px"
                  />
                  <SectionTitle
                    title={researchContent.results.reasons.t}
                    paragraph={researchContent.results.reasons.sub.props.children}
                    center
                    mb="40px"
                    img="/img5.jpg"
                  />
                  <SectionTitle
                    title={researchContent.notes.Title.t}
                    paragraph={researchContent.notes.Title.sub.props.children}
                    center
                    mb="40px"
                    img="/img6.jpg"
                  />
                  <SectionTitle
                    title={researchContent.conclusioAndApply.Title.t}
                    paragraph={researchContent.conclusioAndApply.subt1.t}
                    center
                    mb="40px"
                    img="/img6.jpg"
                  />
                  <SectionTitle
                    title={researchContent.conclusioAndApply.subt1.t}
                    paragraph={researchContent.conclusioAndApply.subt1.sub.props.children}
                    center
                    mb="40px"
                    sub
                  />
                  <SectionTitle
                    title={researchContent.conclusioAndApply.subt2.t}
                    paragraph={""}
                    center
                    mb="40px"
                    sub
                  />
                  <SectionTitle
                    title={researchContent.conclusioAndApply.subt3.t}
                    paragraph={researchContent.conclusioAndApply.subt3.sub.props.children}
                    center
                    mb="40px"
                    sub
                  />
                  <SectionTitle
                    title={researchContent.conclusioAndApply.subt4.t}
                    paragraph={researchContent.conclusioAndApply.subt4.sub.props.children}
                    center
                    mb="40px"
                    sub
                    img="/img7.jpg"
                  />
                  <SectionTitle
                    title={researchContent.conclusioAndApply.subt5.t}
                    paragraph={researchContent.conclusioAndApply.subt5.sub.props.children}
                    center
                    mb="40px"
                    sub
                  />
                  <SectionTitle
                    title={researchContent.conclusioAndApply.subt6.t}
                    paragraph={researchContent.conclusioAndApply.subt6.sub.props.children}
                    center
                    mb="40px"
                    sub
                  />
                  <SectionTitle
                    title={researchContent.conclusioAndApply.subt7.t}
                    paragraph={researchContent.conclusioAndApply.subt7.sub.props.children}
                    center
                    mb="40px"
                    sub
                  />
                  <SectionTitle
                    title={researchContent.conclusioAndApply.subt8.t}
                    paragraph={researchContent.conclusioAndApply.subt8.sub.props.children}
                    center
                    mb="40px"
                    sub
                  />
                  <SectionTitle
                    title={researchContent.thanks.Title.t}
                    paragraph={researchContent.thanks.Title.sub.props.children}
                    center
                    mb="40px"

                  />
                </div>
              ) :
                (
                  <SectionTitle
                    title="المقدمة"
                    paragraph={truncatedContent}
                    center
                    mb="80px"
                  />
                )
              }

              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                onClick={() => setShowFullContent(!showFullContent)}
              >
                View More
              </button>

            </div>
          </div>
        </div>

        <ModalVideo
          channel="custom"
          autoplay={true}
          start={true}
          isOpen={isOpen}
          url="/INTRO.mp4" // Replace with the path to your local video
          onClose={() => setOpen(false)}
        />

        <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
      </section>
    </motion.div>
    </AnimatePresence>

  );
};

export default Video;
