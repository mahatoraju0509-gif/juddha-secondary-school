import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import developerPhoto from "../assets/developer.jpg";

export default function DeveloperPage() {
  return (
    <div className="dev-page">
      <Helmet>
        <title>Raju Mahato - Nepal's Best and Top Individual App Developer</title>
      </Helmet>

      <div className="dev-page-header">
        <Link to="/" className="dev-back-link">← गृहपृष्ठमा फर्कनुहोस्</Link>
        <div className="dev-hero">
          <img src={developerPhoto} alt="Raju Mahato" className="dev-hero-photo" />
          <h1>Raju Mahato</h1>
          <p className="dev-hero-tag">Nepal's Best and Top Individual App Developer</p>
        </div>
      </div>

      <div className="dev-page-content">
        <section className="dev-bio-section dev-title-section">
          <h2>संघर्षदेखि सेवासम्म</h2>
          <p className="dev-subtitle">आमा मंजु महतो र छोरा राजु महतोको प्रेरणादायी जीवन-यात्रा</p>
          <p>हरेक सफल व्यक्तिको जीवनमा एउटा यस्तो शक्ति हुन्छ, जसले उसलाई कठिन परिस्थितिमा पनि हार नमान्न सिकाउँछ। राजु महतोको जीवनमा त्यो शक्ति उनकी आमा मंजु महतो हुनुहुन्छ — केवल जन्मदात्री मात्र होइन, पहिलो गुरु, पहिलो प्रेरणा र संघर्षको जीवित उदाहरण।</p>
        </section>

        <section className="dev-bio-section">
          <h2>आमाको संघर्ष: जीवनको सबैभन्दा ठूलो प्रेरणा</h2>
          <p>राजुको बाल्यकाल सहज थिएन। उनी एक शहीद परिवारमा जन्मिए। बुबाको अनुपस्थितिपछि परिवारको सम्पूर्ण जिम्मेवारी आमाको काँधमा आयो। १७ वर्षको उमेरमा विवाह भएकी मंजुले जम्मा २० वर्षको उमेरमै श्रीमान् गुमाइन्। श्रीमान् देश र जनताका लागि सहिद भए।</p>
          <p>त्यो घरको आधार स्तम्भ ढलेपछि बीस वर्षकी एउटी एक्ली महिलाका सामुन्ने अथाह अँध्यारोबाहेक केही बाँकी थिएन। तर मंजु महतो कमजोर माटोले बनेकी थिइनन्। उनले आफ्ना आँसुलाई कहिल्यै कमजोरी बन्न दिइनन्, बरु त्यसैलाई जीवनको सबैभन्दा ठूलो ऊर्जा बनाइन्।</p>
          <p>उनले बुझिन् कि यो अँध्यारो सुरुङबाट बाहिर निस्कने एउटै अचुक हतियार छ — शिक्षा। उनले आफ्नो अध्ययनलाई निरन्तरता दिइन् र स्नातक तह उत्तीर्ण गरिन्। अध्ययन पूरा गरेपछि उनी सरकारी विद्यालयको शिक्षिका बनिन्, र आर्थिक रूपमा कमजोर विद्यार्थीहरूका लागि निःशुल्क कक्षाहरू सञ्चालन गरिन्।</p>
        </section>

        <section className="dev-bio-section dev-quote-section">
          <p className="dev-quote">"१७ वर्षको उमेरमा विवाह, २० वर्षकै उमेरमा श्रीमान् शहीद, त्यसपछि पनि जीवनसँग हार नमानी पढाइ पूरा गर्दै शिक्षिका बन्नुभएकी मेरी आमा मंजु महतोको संघर्ष मेरो जीवनको सबैभन्दा ठूलो प्रेरणा हो।"</p>
          <p className="dev-quote-author">— राजु महतो</p>
        </section>

        <section className="dev-bio-section">
          <h2>एक विद्यार्थीको सानो प्रयास</h2>
          <p>राजु महतो आफैं अझै एक विद्यार्थी हुन् — कुनै ठूला उपाधिको दाबी उनी गर्दैनन्। तर पढाइकै साथसाथै, आफूले सिकेको सानो प्राविधिक सीपलाई उनले समाजको सेवामा लगाउने प्रयास गरिरहेका छन्। शहीद परिवारबाट आएका कारण, त्यो पीडा र त्याग उनले नजिकबाट बुझेका छन्, र यसै कारण शहीद परिवारका सदस्यहरूलाई पनि आफ्नो सामर्थ्य अनुसार सहयोग गर्ने प्रयास गरेका छन्।</p>
        </section>

        <section className="dev-bio-section">
          <h2>प्रविधिमार्फत शैक्षिक क्रान्ति</h2>
          <p>राजु महतोले आफ्नो प्राविधिक सीपलाई हतियार बनाए। व्यक्तिगत नाफाभन्दा माथि उठेर उनले देशका सरकारी तथा सामुदायिक विद्यालयहरूलाई प्रविधिसँग जोड्ने सङ्कल्प गरे। हालसम्म झन्डै ४० देखि ५० वटा विद्यालय, शिक्षक तथा शैक्षिक संस्थाहरूका लागि वेबसाइट, मोबाइल एप र विभिन्न आधुनिक डिजिटल प्रणालीहरू पूर्ण रूपमा निःशुल्क विकास गरिसकिएको छ।</p>
        </section>

        <section className="dev-bio-section dev-quote-section">
          <p className="dev-quote">"प्रविधि दिनु मात्र ठूलो कुरा होइन, त्यसलाई निरन्तर चलाउन सक्ने वातावरण निर्माण गर्नु प्रमुख दायित्व हो। यस अभियानअन्तर्गत विकास गरिएका वेबसाइट, एप र डिजिटल प्रणालीबापत आजीवन कुनै पनि सेवा शुल्क वा नवीकरण शुल्क लिइने छैन।"</p>
          <p className="dev-quote-author">— राजु महतो</p>
        </section>

        <section className="dev-bio-section">
          <h2>Raju Path Pvt. Ltd. — हाम्रो उद्देश्य</h2>
          <p>राजु महतोले स्थापना गरेको Raju Path Pvt. Ltd. को उद्देश्य पैसा कमाउनु मात्र होइन, समाजका लागि केही राम्रो काम गर्नु पनि हो। संस्थाले नेपालका विद्यालय, कलेज र अस्पतालहरूलाई निःशुल्क वेबसाइट, मोबाइल एप तथा डिजिटल सेवा उपलब्ध गराउने प्रयास गर्दै आएको छ। साथै गरिब, मेहनती र प्रतिभाशाली विद्यार्थीहरूलाई राम्रो कलेजमा पढ्न सहयोग गर्ने लक्ष्य पनि राखेको छ।</p>
        </section>

        <section className="dev-bio-section">
          <h2>यस व्यक्तित्वबाट सिक्न सकिने प्रेरणादायी पाठहरू</h2>
          <ol className="dev-lessons-list">
            <li>विपत्तिलाई शक्तिमा बदल्ने दृढता</li>
            <li>शिक्षा नै सर्वोत्तम मुक्ति मार्ग हो</li>
            <li>मातृ-संस्कार नै जीवनको वास्तविक जग हो</li>
            <li>सीपको सामाजिकीकरण</li>
            <li>निःस्वार्थ सेवाभाव र सामाजिक उत्तरदायित्व</li>
            <li>नेतृत्व भनेको आदेश दिनु होइन, आफैं उदाहरण बन्नु हो</li>
            <li>प्रतिबद्धतामा अडिग रहने निष्ठा</li>
            <li>विपन्नता विरुद्धको लडाइँ</li>
            <li>पलायन होइन, देशमै सम्भावनाको खोजी</li>
            <li>कृतज्ञताको भाव</li>
          </ol>
        </section>

        <section className="dev-contact-section">
          <h2>सम्पर्क</h2>
          <p className="dev-title-line">राजु महतो | Nepal's Best and Top Individual App Developer | संस्थापक — Raju Path Pvt. Ltd.</p>
          <div className="dev-contact-links">
            <a href="https://wa.me/8109036694264" target="_blank" rel="noreferrer">WhatsApp</a>
            <a href="mailto:mahatoraju0509@gmail.com">Email</a>
            <a href="https://www.facebook.com/share/1FHsVieV2R/?mibextid=wwXIfr" target="_blank" rel="noreferrer">Facebook</a>
          </div>
        </section>
      </div>
    </div>
  );
}