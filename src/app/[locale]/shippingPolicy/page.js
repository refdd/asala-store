import HeaderPages from "@/components/headers/HeaderPages";
import OverViewPages from "@/components/pagesSections/OverViewPages";
import React from "react";

function ShippingPolicy() {
  return (
    <div>
      <HeaderPages title={"shipping_policy"} />
      {/* Shipping policy content goes here */}
      <div className="container mx-auto px-4 pt-32">
        <OverViewPages>
          <h1 className="text-3xl font-bold text-center mb-6">
            سياسة الشحن: تسوق مع الثقة!
          </h1>
          <p className="text-lg mb-4">
            نوفر لك تجربة تسوق سلسة وسريعة مع برايم ستور...
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              تحياتنا من فريق برايم ستور!
            </h2>
            <p>
              نحن هنا لمساعدتك في العثور على أفضل المنتجات وتوصيلها إليك بأسرع
              وقت. فقط اختر ما تحتاجه، ودعنا نعتني بالباقي.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">سياسة الشحن</h2>
            <p>
              نقدم خدمة شحن سريعة وموثوقة لتوصيل طلباتك في أسرع وقت ممكن. يمكنك
              تتبع طلبك بسهولة من خلال موقعنا أو تطبيقنا.
            </p>
            <ul className="list-disc pl-5">
              <li>التوصيل خلال 2-3 أيام عمل للمناطق الرئيسية.</li>
              <li>التوصيل خلال 5-7 أيام عمل للمناطق البعيدة.</li>
              <li>خدمة التوصيل متاحة على مدار الأسبوع.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">تكاليف الشحن</h2>
            <p>نقدم خيارات شحن متنوعة تناسب احتياجاتك:</p>
            <ul className="list-disc pl-5">
              <li>شحن مجاني للطلبات فوق 200 ريال.</li>
              <li>تكلفة شحن ثابتة بقيمة 15 ريال للطلبات أقل من 200 ريال.</li>
              <li>شحن سريع بتكلفة إضافية 25 ريال.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              سياسة الإرجاع والاستبدال
            </h2>
            <p>
              إذا لم تكن راضيًا عن منتجك، يمكنك إرجاعه أو استبداله خلال 14 يومًا
              من استلام الطلب. يرجى التأكد من أن المنتج في حالته الأصلية
              وبعبواته الأصلية.
            </p>
            <ul className="list-disc pl-5">
              <li>الإرجاع مجاني للطلبات التي تحتوي على عيوب صناعية.</li>
              <li>تكلفة إرجاع المنتجات الأخرى تتحملها أنت.</li>
              <li>سيتم استرداد المبلغ خلال 5-7 أيام عمل بعد استلام المنتج.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">طرق الدفع</h2>
            <p>نوفر لك خيارات دفع آمنة وسهلة:</p>
            <ul className="list-disc pl-5">
              <li>الدفع عند الاستلام.</li>
              <li>الدفع عبر البطاقات الائتمانية (فيزا، ماستركارد).</li>
              <li>الدفع الإلكتروني عبر محافظ الدفع.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">سياسة الإلغاء</h2>
            <p>
              يمكنك إلغاء طلبك قبل شحنه دون أي رسوم. إذا تم إلغاء الطلب بعد
              الشحن، سيتم تطبيق رسوم إرجاع حسب سياسة الإرجاع.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">تواصل معنا</h2>
            <p>
              إذا كان لديك أي استفسارات أو تحتاج إلى مساعدة، فلا تتردد في
              التواصل معنا عبر:
            </p>
            <ul className="list-disc pl-5">
              <li>البريد الإلكتروني: support@primestore.com</li>
              <li>الهاتف: 920000000</li>
              <li>الدردشة الحية على موقعنا.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">شروط عامة</h2>
            <ul className="list-disc pl-5">
              <li>
                يجب أن يكون عمر المستخدم 18 عامًا أو أكثر لإنشاء حساب أو إجراء
                عمليات شراء.
              </li>
              <li>
                نلتزم بحماية بياناتك الشخصية وعدم مشاركتها مع أطراف ثالثة دون
                موافقتك.
              </li>
              <li>الأسعار المعروضة على الموقع تشمل الضريبة المضافة (VAT).</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              قبول الشروط والأحكام
            </h2>
            <p>
              بمجرد إتمام عملية الشراء، فإنك توافق على جميع الشروط والأحكام
              المذكورة أعلاه. نحرص على توفير أفضل تجربة تسوق لك مع برايم ستور.
            </p>
          </section>
        </OverViewPages>
      </div>
    </div>
  );
}

export default ShippingPolicy;
