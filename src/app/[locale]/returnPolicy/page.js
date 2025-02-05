import HeaderPages from "@/components/headers/HeaderPages";
import OverViewPages from "@/components/pagesSections/OverViewPages";
import React from "react";

function ReturnPolicy() {
  return (
    <div>
      <HeaderPages title={"Return_and_Exchange_Policy"} />
      <div className="container mx-auto px-4 pt-32">
        <OverViewPages>
          <h1 className="text-3xl font-bold text-center mb-6">
            سياسة الإرجاع والاستبدال
          </h1>
          <p className="text-lg mb-4">
            في برايم ستور، نحرص على رضاكم التام. لذلك، نقدم لكم سياسة إرجاع
            واستبدال سهلة ومرنة.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              شروط الإرجاع والاستبدال
            </h2>
            <p>
              يمكنك إرجاع أو استبدال المنتجات خلال 14 يومًا من استلام الطلب،
              بشرط أن تكون المنتجات في حالتها الأصلية وبعبواتها الأصلية.
            </p>
            <ul className="list-disc pl-5">
              <li>يجب أن يكون المنتج غير مستخدم وبحالته الأصلية.</li>
              <li>يجب أن تكون العبوة الأصلية سليمة وغير تالفة.</li>
              <li>يجب إرفاق الفاتورة الأصلية مع المنتج المراد إرجاعه.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">خطوات الإرجاع</h2>
            <p>اتبع هذه الخطوات البسيطة لإرجاع أو استبدال منتج:</p>
            <ol className="list-decimal pl-5">
              <li>اتصل بفريق خدمة العملاء على الرقم 920000000.</li>
              <li>قدم تفاصيل طلبك وسبب الإرجاع أو الاستبدال.</li>
              <li>سنزودك برقم تتبع لعملية الإرجاع.</li>
              <li>قُم بتغليف المنتج بشكل آمن وإرساله إلى عنواننا.</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">تكاليف الإرجاع</h2>
            <p>نغطي تكاليف الإرجاع في الحالات التالية:</p>
            <ul className="list-disc pl-5">
              <li>إذا كان المنتج معيبًا أو تالفًا.</li>
              <li>إذا تم إرسال المنتج الخطأ.</li>
            </ul>
            <p>في حالات أخرى، يتحمل العميل تكاليف إرجاع المنتج.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">استرداد المبلغ</h2>
            <p>
              بمجرد استلام المنتج المرتجع والتحقق من حالته، سنقوم باسترداد
              المبلغ خلال 5-7 أيام عمل.
            </p>
            <ul className="list-disc pl-5">
              <li>سيتم استرداد المبلغ بنفس طريقة الدفع الأصلية.</li>
              <li>
                في حالة الدفع نقدًا عند الاستلام، سيتم التحويل عبر الحوالة
                البنكية.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              المنتجات غير القابلة للإرجاع
            </h2>
            <p>
              بعض المنتجات غير قابلة للإرجاع أو الاستبدال لأسباب صحية أو أمنية:
            </p>
            <ul className="list-disc pl-5">
              <li>المنتجات الشخصية مثل مستحضرات التجميل والعطور.</li>
              <li>المنتجات الإلكترونية المفتوحة أو المستخدمة.</li>
              <li>الملابس الداخلية والجوارب.</li>
            </ul>
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

export default ReturnPolicy;
