import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./PDFCertificate.css";
import jsPDF from "jspdf";

const PDFCertificate = props => {
  const [chapters, setChapters] = useState([]);

  const setChapterNames = () => {
    const chaptersLocal = [];
    props.userData.chapterdata.map(item => {
      return chaptersLocal.push(item.chapterTitle);
    });
    setChapters(chaptersLocal);
  };

  useEffect(setChapterNames, []);

  const PDFGenerator = () => {
    const doc = new jsPDF("p", "pt");

    const imgData =
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAEAAQADASIAAhEBAxEB/8QAHgABAAICAwEBAQAAAAAAAAAAAAcIBgkDBAUCAQr/xABKEAABAwMCAwQGBgcEBwkAAAABAgMEAAURBgcIEiETMUFRCRQiYXGBFiMyQpGhFVJicoKSsRczosElQ1Nzk7PEJjd1pMLD0eHw/8QAHAEBAAEFAQEAAAAAAAAAAAAAAAYBBAUHCAMC/8QANREAAgEDAgMHAQUJAQAAAAAAAAECAwQRBSEGMYESQVFhcZGhIhMUFTLRBxZCcpKiscHhM//aAAwDAQACEQMRAD8A2p0pSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoDjkNF+O60lxbKlpKQ43jmTkd4z4ioY2/wBxbjozV72gdaylPy+0zbbs8rpIQr7CVE+J64J8cp8BU11DnE1oNOo9F/puM3/pKz/W86ftKYP2x8uivdg+dR3WVcUaSvrV/XSy3HulH+JNeOFlPmmvMkuhu2r1nYXa+irhKXfGX8LT8MvDXJp+RMdKi/YPdH+0TSgYmOc17twS1JKj1dT91354wfeD5ipQrK2V3Sv7eFzReYyWf+eq5MxF9Z1tPuZ2tdYlF4/76NboUpSr0sRSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAVxS4rU6K9GfQHGXkKbWg9ykkYI/A1xXK6QrNDcl3CWxBiNjK35LqW20j3qUQBUNXHjO2liaot+noepk3y6zZKIrTdpYXIb51qCU5dA5MZPeFHFUaTWGVTaeUQlt3qN3Z/d1xl9ZERmU5bpue4t8/LzfIgK+Xvq7YORkd1Ub3+hpg7v6jbT3Kdbd6ea2kLP5qq1mzGqxqnbWwTH3U+tdl6q5zK9pTjeUn4kpTzfOtX8I3Lt7u60lvaEm49H2X/AK+TbHGdqrmztNYit5xipdV2l/v4M5pSlbRNTClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQCqx8V/Gna9hP9AWJiPfdZuo5lMOLPYQUkeyp3HUqPeEAg46kgYzlPF1xER+H/bR6RFdbXqm6BUa1R1dSFY9p4j9VAIPvJSPGtcnDBs7L4l97W4l7flS7agruV7mqWS44gK6pK+/mcWQnPfgqI7qAmPZ7YfcTjYup1tubqK4xtIhwiNjCDJIUcojN45G209QXOU5OQOYhRF7dsdh9B7PRENaV03Ctz4QELnFHaSnOmDzOqyo569M4691Zpa7ZEslsiW6BGahwIjKI8eMwkJbabSkJShIHQAAAAe6ud11DDS3XFBDaElSlHuAHeachz2RR3f2WJu7+o3EqCgl1tvI/YaQn/017OmdFXPeThq3B0RZ3kM3tD7E22vLeLRbfCkuIwsdUZLBGf2j176jjU93OoNSXW5knMyU7I9rv9pZV/nU2cId4Zi6kvttceSh2ZHbcabUcFZbKs48yAsn4Z99c/6BeKfEarZ2qSn/AHZa+cHRvEVk4cMuhjLpxh/bhP4yVw2Q9ILrbZ7Uh0TvJBlXOLCf9UkTX0FNygkHBLn+2SB1/WI6gq6Ctk1gv9t1VZYV4s81i5Wua0l6PLjLC23UEdCCKp/6R7hsb3B0GdwrDASdSWBBVODDf1kuEPtFWO8tfaH7POPKq3ej24pHNqtcN6H1FOc+iF9dDcdTzn1dvlk+ysZ+yhZPKrwzyq8DXQBzkbYaUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKprxS8flv25kztK6ADN31Mwssyrm6OeLCUO9KR/rXAen6oI65IIoC22oNUWbScP1u93eDZomcdvcJKGG8/vLIFRhL4wtmYU1UVzcG0qdT3qaK3G/ktKSk/I1qG1xuFqXcm8ruuqL3Mvc9Xc7LdKggeSE9yB07kgCuzZtptcajt4n2nRmoLpBPdJh2t95r+ZKCKAlLjX3pjb072TJdplpmadtbCIFuebPsOpHtOOD95alfJKauj6OHbBOjtkV6lkRwi5amlKfC1Ac3qzZLbSfPBUHFfBYrWDe9PXXTUwxLxbJlqlgZ7CbHWyvH7qgDW77Z2xfRjaTRVoKeVUGyw46h+0llAV+YNAZhUeb+apGldr7u4lfJJmp9RZ64JU5kKx8Ec5+VSHVUeLHWIueqIOn2HMtW1vtXwD0LrgBAPwRj+c1GOJL/wDD9Mq1E/qkuyvV7fCy+hK+F9Peo6rSptfTF9p+kd/l4XUgeu9ZbzM09dYlygPKjzIrgcadT4EeHvHgR4g10alS7aGRC4eLPfVMn1t67Lc5yOqWVpLePgVNJPzrniztqtf7SpReHTj2/Zr9TpS9uqNv9nTrLKqS7GPVP9C1Oi9SwdztCRbgppDkeewpqVGPUJVgpcbPu7/iCD41o63p28f2l3Z1VpJ3m/0TPcZZWe9bOeZpf8TakK+dbTuEXVS2Ltd9OuuHsX2hMYQe4LSQlePeQU/yVS70m2lv0FxNO3BKMJvdpizCoDvUkKYPzwwn8RXR+haj+KafTuJfm5P1Wz9+fU5i4g0xaTqNW2j+XnH0e69uXQuRsfx07aTtntKydZ6yhWnUyYSWLhFeS4pztWyWyshKVfb5ef4KqatF7/7bbiONM6c1xY7pJdICIjU1CZCie4dkohf5VpPtmye4l7jIkW7QWp57CxzIdi2eQ4lQ8wUoIIrGLla7jp64Kiz4kq2TmSCWZLSmnUH3ggEVnyOn9C1K1DcOvpBNdbQTY1u1PJk600mAG1RpbnNLjJ82nVdTgfcWSPAcvfW1DbPc3Tu72joOp9LXBFxtUsdFDotpY+024nvStPiD7j1BBIGU0pSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKVxvvtxWHHnnEtMtpK1uLOEpSBkknwAFAVM4/OJZ/anSbGj9NzvV9U3tsqffZVhyHE6gqHkpZykHvASo9+K1v7c7c6h3Z1hC03pqCu43WWokJzhLaR1U4tR6JSB1JPw6kgH2N+9zHN393tT6rK1qjTpahESsnKI6PYZTg93sJTkeZNbGfR+7GQ9uNoomrJUf/ALR6oZTJcdcHVqJklltPkFJw4fMqT38ooD39gOCjQuzNsgTLhb42pdXISFP3SajtG23OuQw2rogDOArHMcZyO4WGAwMDur9pQHl6i0tZtX29cC+WmFeISwQqPPjoeQc9/RQIr0kIS2hKEgJSkYAHgK+qUB52or7G0xYp92mK5Y0NlTy+vU4HcPeT0HvNa+b7eZGor1OuktXNJmPLfcI7sqOcD3CrLcWmtTBstv0zHcw5OV6zJA7+ySfYB9xUCf4Kq1Wi+N9R+8XkbOD+mnz/AJn+ix7s3/wFpn3aylezX1VXt/Kv1efZHYt8F66T40OOnnkSHUstp81KIAH4mrfb5WCJYNgJNsax2dvbiNMk95KXW05+JBUfxqGOGHSP0h3FRcHUc0W0tGQSR07Q+y2Pj3qH7lS5xYXkQdu4sFKsOTpqAU570ISpRP8ANyfjXroVrG20G9vqi/PFxXpjHzJ/B5a/dyuuILGwpP8A85KT9c5+Ir5IE2Enm37uaccCikLeUyevfztqTj8SKuhK0pZZ19ZvUm0w5N3YbDLM55hK3mkAlXKhRGUjJJ6Yz08hVGdqe0/tM0r2eOb9Jx858u0GfyzV/KkPAU27KtDwn/lL9CNftDglfUZ97hj2b/UViu4O1mkt1rOq16t0/BvsMj2RKaytv3oWMKQfekg1lVK2caqNR3GRwPXDYZyRqrS5dumg3HAFdormftqlHCUOfrIJOAv4BXXBVgnCFxLXLh23KiPOynVaPuTqGbzBA5klHcHkp8FoznI7wCnxrc1qXTlt1fp+42S8RG51ruDC40mO6MpcQoYI/wDvwrRlxBbTP7Ibwak0c6px1iBIzEfcGC7HWAtpflnlUM48QaA3sQprFyhR5cV5EiLIbS6082cpWhQylQPiCCDXPVT/AEbe7A3A2BasEl7tLppR8wFgn2jHXlbCvhjnQP8AdVbCgFKUoBSlKAUpSgFKUoBSlKAUpSgFR1xF3w6c2G3BuCSUuN2OWlsjwWppSEn+ZQqRawHf+zK1DsbuBbm2y68/YZoaQkZKnAwsoAH7wFAaTrDa1Xy+263IzzzJLcdOPNagkf1rfPb4Ee1QI0KIymPFjNpZZaQMJQhIASke4AAVoa07eXdOagtl2jgF+BKalNg/rIWFD8xW+K03SPe7VCuMRYciTGUSGVj7yFpCkn8CKA7dKUoBSlefqC5iy2G5XBRATEjOPknySkq/yr5nJQi5S5I+4Qc5KEeb2KPbyaoVq7cm9zeYqYQ+YzAz0DbfsjHxwVfxVhVfqlFaipRJUTkk95r0tM2N3U2orbaWchybIQwCBnl5lAE/IdflXJ9apUvrmVR7ynLPVs7Ao06VhaxpraFOOOiRbfhl0h9HNuGpzqOWXdnDKUSOobHstj4YBUP36iPiv1OLrruJaG18zVrjDnT5OuYUr/CG6tQ87C0tYFuKxHt1ujFRx3IabT/kBWvvUl8f1Lf7jdpP9/NfW+oDuTzEnA9w7vlW1+Kpw0rSKGlU3u8Z9I7t9Zb+5qDhGE9X1m41eqtlnHrLZLpFNexmvD1Zjed2rIOXmbiqXKWcZwEIJSf5uX8au/VbeEPSpSm96jdRgKxBYUfktz/2/wADVkqkHBlo7bS1Ukt6jcunJf4z1I5xzeK51Z04vanFR683/nHQUpSp2a+Fa0vSzaYYh6z0BqBthKH58GVDddSOqwyttSQfh26v/wAK2W1rQ9LHrFubrbQul23EKVboL895KSCQX1pQkHy6ME/xUB1vRN34x9y9c2Xm6TLQ1M5fPsXgj/qPzrZxWsz0TVjU/uDry8dmSiLa2InaY6AuuleM+/sfyrZnQClKUApSlAKUpQClKUApSlAKUpQCvxSQtJSoBSSMEEdCK/aUBpH4hdsZG0O8OptNux1R4jMtbsEqGAuKtRU0oeY5SB8QR4Vdf0efE3Au2m4u12opvYXmEVCzOvEBMlj7XYA/roPNgHvTgD7NS3xh8LjfERpGPJtS2YmsLSlSoLzvREhB6qjrV4AnqlXgfcSa1O3iz3nQmpX7fcI8qy3y2P8AKtpeW3mHUnIII6gjoQR7iDQG+ilaw9l/SQaw0RFZtmtII1nARhKZpdDM1CeverBS54faAPmo1aHT3pFNmbxGacm3S52JxYypqdbXFlB8iWQsH5UBZusa3M/7t9V/+Ey/+SuuPbndDS+7en1XvSV2bvNrQ+qMqQ22tvlcSEqKSlaUkEBST3eNexqO3KvGnrpATjmlRXWBnzUgp/zq2uYOpQnCPNpr4Lq1mqdenOXJNP5NdVTNwrae/Su467gtOWrZFW4CfBxfsJ/IrPyqGlJKVFKgQQcEHwq0XB/bkN6f1DPH969KbYPwQgqH/MNc68L2yudXoxlyi3L+lZXzg6X4suXa6NXlHnJKP9TSfxkyHii1YbBt4Layvlk3Z4MdDg9kn2lkf4Un3KqnzTS33UNtpK3FkJSlIyST3AVMnFVqI3XcVu2oVlq2RUNlOegcX7aj/KUD5V53Ddor6V7ix5bzfNCtIExwkdC4D9Un+b2v4DWU12VTW9f+603yagvLH5n0eWYrh+NPQuHvvdVc05vzz+VdVherLU7aaRTobQ9ps4A7ZhkKfI+86r2ln+YkD3AVk9KVvmjRhb0o0aaxGKSXojnqvWnc1Z1qjzKTbfq9xSq+6m49dkNKzpUGXq9bk+K4pl6Mxa5alIWkkKSSWgkEEEYzUI7m+lY01bG3Y+hNLTb3JxhM27qEaOD5hCSpax7jyV7HgXA3Z3W09svoa4aq1LLEW3xE4SgYLkhw55Wm0/eWrHQfEnABNaPN3tzbpvFuPfdX3dR9bucguJa5iUsNjo20nPglISkfCu/u/vvrbfS+fpLWF7euHISWIaPq40YeTbQ6J+PUnxJqeOCfguum8t/tusNUwvVNAQ3g6GpKCFXVST/doHT6vI9pfccFIyclIFx/RzbTydtuH1i4XKG5DuupJSrmtDycLDGAhgEeAKUlY/3lWlr5aaQy2httCW20AJShIwEgdwAr6oBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAVGe8HDloHfGIUaosbbs4J5WrrF+pmNeWHAPaHT7Kgoe6pMpQGt3cD0X2qbc6+9o7VFvvMYHLca5pVGfx5cyQpCj7zyj4VTC92iTp+8z7XMCUy4MhyM8EKCkhaFFKsEdCMg9RW+W8XNqy2idcH/7mIwt9f7qUlR/IVoWuc9263KXNeOXpLq3ln9pRJP5mgNtXo/9PixcL+m3inlduT8qasfF9aEn+VtNWLrANgNPDSux+g7Vy8q49lidoMY+sLSVL/xFVZ/QFD95tLq0juTe4XLhhx8yWCB0LbntAD4ZKf4asDwjqT/ZxckhWVC6uEjy+pZ/+K6/FVoH9M6djalit80q2fVSMDqphR6H+FRz8FKPhXl8H94Qq36itROHUOtykjzCgUn8OVP4itO6fZfhPFLovaM1Jx9Gm/jDXQ3ZqN9+McJKst5QcVL1TS+cp9SEd2pq5+52qXXPtJuL7Qyc9ELKB+SRVneGXSH0c25anut8su7uGSonvDY9lsfDGVfx1WLcO0rTulqCA2MLcuryGwf2nTy/1FXwtlvZtNtiQY6eRiMyhltI8EpAAH4Cq8JWn22q3V3U5wbXWTefhP3PnjK9+x0i0s6fKaT6RSwvdp9Ds0pStwmlTRrxZ6dXpbiV3JgrTy897kS0pxgBL6u3SB7sOCso2A4JdwOIWxpv1mdtVr0+Xlsev3GV1UpOOYJbbClZGfvBIPnWUekt04bHxR3GaRgXm2Q5wPnyoMf/AKerNeij1GqdtFq2yLXzfo+8iQlPilLzKR/VpX50B7myHo0tA7euNXHWUhWu7sg8yWH2+xgNnr/qskud/wB8kHH2RVvokRiBFZjRWW40ZlAbaZZQEIbSBgJSB0AA6ACualAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlARjxOah+i3D5uDcArkWLNIYQryW6gtJP4rFaY9LWZWotTWi0oyVz5jMUY78rWE/51tX9IZdnrbwwX1llDikzpkOM4pCSQhPbJcyojuBLYGT4qA8a1pbB3yy6Y3p0Vd9Qu9hZoN1YkyHeTnCAhYUFEeQIBPuzQG7yNHbiR2mGUBtppIQhA7kpAwBXJXWt9xiXeCxNgymZsN9IW1IjuBxtxJ7ilQyCPeKjLeTic0FsJeLLb9Z3CVbjdUOONSGYbj7bSUFIyvkBUM5OMA/ZV3dMgSjLiszor0aQ2l6O8hTbjaxlK0kYII8iDVXrFZ3Ngd9YzT/ADDT925ozElZ6dksjAJ80LCAfd18al/RnEftfuChJsOvLFNcUMiOqYhl/wD4TnKv8q9zX+iLZuhpN62vuNqSv6yNLbwvsnB3KGD18QR4gmo7rGmyvIwuKG1ak+1Hz8YvyZJdE1ONlKpbXG9CsuzPy8JLzj8+xAu92lFWbffT11DWId2lRV8/3S4haELH4BB/iq0tYa3oJvUmlNPwtWpTcbjbVNPqeaUUAvIGM5ByQfHz78DuGZVTStPdnXuK6WI1mpJd6bX1J9WV1fUle29tbt5lRTi33NJ/S138kKUrytQaqsmk4Zl3y8QLNFH+vuEpDCP5lkCpGRk11elo04I+r9vb+E9ZcGVBUoD/AGLiFgH/AI6vzrh9EzqIx9ea9sPOeWZbWJwRnxZdKM/+YrwPSI8T2i96l2DTOkFKvDdmkOSHr2nKWVKUnlLTQIyodASvoOgxnvHkejAt15d4iX50CG49amLS+zcZKeiGUrKS2CfNS20gDv6E9wNAbZqUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQHm6j05bNX2GfZbzCauNrnMqYkxXhlLiCOo93uI6g4I61rf3+9HPqfSlxlXTbkK1LYFErFtW4kTow/VGcB0d+CMK8MHGTsypQGl/Qe+G7HDfNNst1wuVhaQ4VuWW6xiWSfvfVOD2SfEpwffU9sekStevrEbButtjbdSWt0DtVQnOnMPvJadBwrxBDgIrYnftNWjVMIw71aoV3hnvjz46H2z/AAqBFQ9qngl2X1Xzqe0TFt7yu521vOxeX4JQoI/FNAUEv2heFncaSuRp/V+ptrpD32Yd2tqp0VCvIcilKA+LmKxdPDS7bXlP6J3v0NNyfYSb4u1SV+XsuhIz/HV27t6Mja2bzKh3fU1uX4JRLZcQPkpkn86xWV6K/TyyfVte3NoeHawW1/0UmgKpvaC4lLaeWHqK/wA5sD2HLRrBElCh4cvZSTXUlR+Km2tKUp/dcs9xXHlXF1H4oURVo3PRTxy4C3uY6lHiFWME/j6wP6V3YvorbMjHrG4U53z7K2IR/Vw0BRrUGqt7I7Tib5d9ettY9tNwlTQn585rDGtOXvUVzit8yJk2a8hhsvzWuZS1qCUhSlL9kZI6qIA8SK2jae9GPtlbeVd0vGorw4O9JkNMNH5Jb5v8VTPt7wsbV7Xy2plg0dBantD2JksrlPJPmlTqlcp96cUBRzaz0V2rLu9Hk691BC0/CJCnINsPrMsj9XnIDaD7xz/Ctgm0uzWkdkNLiw6QtSLbCKu0eWVFb0hzAHO4s9VHA+A8ABWbUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgOKTJZhRnZEh1DDDSC4466oJShIGSok9AAPGulYdSWrVMFU2zXGNdIaXVsmREdDjfOk4UkKHQkHoaqV6Te/600xsmmZYr9Cs9hkSEQZzPaONzJRcCx2beMpUkpHMQcEBCiCc9KY7V6i4luGTbCz65sEed/ZnLxOSw92UyEULVgqcaBLjAUQPaHJnI69aA3K0qMOHLfuzcRu18DV1oaVDcWox51vcWFLiSE450EjvHUKSrplKgcA5Azm76usWn5DUe6Xq3W190ZbamSm2lLHuCiCe4/hQHrUrENLbqaf1dqKZYIb77N7iQ2Lg7Blx1tLEd5OW3EkjlWnOUkpJwpKgeorKIc6NcWe1iyGpLXMU87KwtOQcEZHiKA56Ur4U82haUKWlK1dUpJ6n4UB90rytVaqtOiNOXC/X2ezbLRb2VPyZb6sIbQPE+fkAOpJAHU1V/QvpONmtZaiTaZT13012j6mWp14jIRFUOvKtS0uK5AcD7QGMjPiQBbWldGReoUFvnmSmIPUAiQ8hJGc48cdcHHwroN64sMq63G0QrxAuF7t7ZckWmLKbXKbAAPtNBXMnOU94HePOgPdpWrud6QPiM17qe5xNFaCYaYhuupMOJZn5rzSUdSHV8xHMARnAT3jp1qZuArjW1hxB6vvuldZ2xp6XHjevRrnbYpbZaSFBKmnhkgElQKT44UPKgLvUrhlzGIEdb8l5uOwgcy3XVBKUjzJPQV4mk9w9La99c+jWpbRqH1NYbk/ouc1J7BR7kr5FHlPQ9D5UBkNK4BOjGYYgkNGWEdoWOcc4TnHNy9+M+Nc9AKVWfeb0gm12yW4n0Puhul2nMDE9+zstvNQV+DbhUtJKsdSE5x0B69BM20272ld7tHsam0hdEXO2OK7JeByuMOhKVKacT3pWApOQfMEZBBoDMqUpQClKUApSlAKUpQClKUApSuGWp5Mdwx0pW8B7KVnAJ8qAoN6WGWu7ae0Tp5l8h5L7k1ENIKlSXVKQw2lIHXI53D7+7vNZ7xZ7qaa4deElW3Ycjy79K0+1pqNbGnUlbSVR+yU8sdSAlAUoHHVXL55qFt3NP7tcSPGMrSbEWBYommXoT8iahQeZYSlCnmlKUepUoLVhsfe69wzVi9N+j82+b1mrVusXpuuL56yJKRcn3DGBHdzNqWrn69SFHlOOiQPZoCrtgn6o4P8A0eiL7BekWvVuvryhLD3LyuW+OttakKTnuUpphSge8duCOozUfObbK0Hwlz99NaSntQ7g6wmMwrDJuylSVwUlayqQS5nmdU2ytSVHqgBBSQc1s14idhbLxFbWTtGXZ0wQtaJEKc02FqhyEZCHEpOM9FKSRkZStQyM5FON4vR8bq3HZiz6ctG4z+sWLC7zwdMT0NxI6UDnA7Nzm6uYWQnnIASVDmGAKAsNtFoKfrrhP0/pu5yPX37sy21dZAnOxl9j2uX1IW0AslfKshPQKLhKjgnOujR0PcKx6i30a2Z1RN0rt7p1yXNmyETVIzGZcdEZCF4Ky6sJKQRgkA8xxVndqNueLq1aCt+3NssOl9rbJGZPb6g7ViTLkqJPMo8jr2XFDAJ5E932k9K6u3HBbuVovg53W0pHgwjrnVM6OG2ESgjtYjDjZKOdYSAVfX45iAQrORmgOzsxxTXraDgFTrC6zZGo9Uy7pLgWf9JPLfW48pzopalEqUlBKlYzk4x0zkfHG7e71slwzaThNane/tF1Fc0P3+7xZHLJk5YeL6EqScpZS4pKEpThISnHeTnk2U4Etw9RbLy9vt3bxGsWj4z6rharbagw7NjTcqy8t5KSko5VuAoKlE8wwUcuDS7iZiaPsupWbDpXWmpteKty1NOXO8PJXEIwkcsbBJUOYKBUPZPKMZ76AtTvduDr+9cFOylqvk9296x1ldjOKlpBVIjtqcdY7QAYUB2kVZ6fd6+JrAbvwmb067uDO11o0BG0ppGyXFby9Q3FDYXNc9oetvS+q3iUqOENeykEApynI+NE7E8TvEdovSxekKsVn0iwI+njd2Ba3G2+Rtv6tSGg4pPZoSOZWc8vfkkm92wvDfqTSsiJqLdHWknW+po6AmHbmVluz2sDGCwwEpSpwYADhSCABgAjNAVl40tM6/e3D2d0Vp+U3O1FZuZVoDUp0+tMpMJuO7KCyAHu1akrUckcjYOScgTPwX8HE7Z2XL3C17Mdnbm3gvrlJQ+FtR0OqClpUU9HHCoFSlA8vUAZxkys/s9IvfEmxr+4hhUK1W8R4CR7S+15FpSrr9nAkywQM55mz0wc/XFRxAscNe0czVy7cq7TVPtwYMTJShb6wopLigDyoAQpR88ADBIoCGeP7iSi7H6Bc0HpBDbWt9WJc+rgthK4rDqil1/CepdcVzJSe8nmVnKeuU8BHDI5w8bUKk3pjstY6i7OXc0HqYyEg9jH+KQpRV+0tQ6gCqWaC4fuIvis1SjemPcbbYJUyWJdvn3WQtptJR7KFR2gh0pQjGEkjwyCe+p4h7X8cOgHjLh6+0/q9I6qgvSEOpc92Xo7ZT8lJoDDvSYbm6w1Vu9pjZvSrsksTojKnYUU8qpsmQ6pCG1H9UJSnxx7as9Kha3bcX3YHjV0noDbq9SZ91iyrYzcXoz6y3KWrkdkh5CQAGkgqyjryoT1JVk1ZPcPhi3Z4j7/AKa3SjvR9rt2bFGYgy7dPbV6ot5pbihKYkN9qMELGE4XjGCrp1mbhD4OGuHld11NqW7p1VuJes+u3X2lIZSpXMtDa1+2orV1UtWCrA6DByBTjiv0DeNvOJ/b1G3jkqDu9qDNxmKi3F2WhEh+QpLKUuPjqhKUqSrmASUpyUpT0rMeELcfcLSfE7utbtf62natRpbTU964F6e6/FS7GeZKuzC8BPKS4nokfeqbXeGXWd59IN/avPMM6Pt7CVReclTi8wVMJSE4wCl1Sld/dg465EHbacF/EFA3p1vc5D9n01Z9UqnwrvdHnWZnrcKS4VOhlsZcBVnIz2ZykcxGMECINstF7tXDScbcfS236tY6iv0uXBZucyKiYm38/K65JDKxyhx1brv1zgKUpAA76vX6P3hu1Rw7bb3lrVz7bd4vUxEk2xh/tW4SEowASPZ7QlR5uXIwEdTjpgezfB3vZaIbOkdYbp/ofbm3LKWoGknVMS57YASEre7NKmklKQCApROVDx5qupY7HA01aYtstcVuFAjI5GmGh0SP6kk5JJ6kkk5JoDvUpSgFKUoBSlKAUpSgFKUoBSlKA6ka1Q4ciRIYistPSFhx1xCACtWMcxPicdM126UoBSlKAUpSgIv4j4t1vG2LthtDi4zt/uMGzSZTZIUxFkSW2pCxjx7JS0j3qFUu1xtfpPXPFVsHpHSUYJtsWP8ASGcy2g8rURCwtpK/2lCPyqPeS4CTgpCb8J1zYbtqj6NgmXMQpSiSzzMpdaKVlPMenOglB6dxx1BqPtF7DaH4e52rteRGJky8SWXSu4XKaqQ61FGFIiNZADbYUlKUpAJ6JBUcAC2jc0ZQlUjNNRzl+GOfsXUrWvGcKcoNSljC8c8sepM6H23HHG0uJU43jnSFAlOeoyPCvuoK2i1bCsDj8u+SnnL5qeW28sIbKkNJVkNFZ7kBR5+UfqBJxjrUiM7rWKVHub8cynmoMRc0LDBCZLSSUlTROAr2hyjuye7I61jbTVre5oxqTkot52zulzWemG/BvBlLzR7m2rSp04uSWN8bN8njyzlLxSyZjXm3/Tdp1Vb/AFG9WuHd4POl31afHQ83zpOUq5VAjIPUHwrkt96hXO1x7ixJbVDfaDyHeccvJjOc5x08a8W+6tWxfrNZ7UYsmdMPrTweUrlbhpPtuApB6kkBOehOayVS4pU4Kbezxjzzyx6mKp21WpN00t1nPljnn0MmQhLaEoQkJSkYCQMACvqulNvUC3RpUiTMZZZit9q+pSx9WjGcnyH9a8/Ses7drJiU7bw+kRnA2tMhotL6oStKuU9cFKgRnFfTr0lNUnJdp8l37FFb1XTdVRfZXN42WeR7tKUr3LcUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoCKNDbOSdPugXCQzhBc7SXDkPCTMClKIClHHYpHNzFLZ9pQBJ6YPras2nhztLT7fZUBmXJUypRnSnnW3EodSsoUVFRAPLjIFSDSsNDSLOnQduobNNeeGsbPu29+by2zNz1m9qV1cOe6aeO7Ked137+3JYSRB1y2Ov1w+kDhlWv1+5KW63PK3ipgKQEllDeOVCehR2nVXIcYFepa9ptRC5TXZ11hNR3G4/YIhhY7PsEnsWMEYDSVnmPivlGQMmpdpVvHQbKM+2k/d+fPx5vzfeXMuIL6cOw2scuS25cvD8q8l3EJ2XYi5Lait3yZBfj2+1LhQobBcU12ylFSnHOYDmBVhWMeQx7PXqtbJatRaJkBNztbAl22NbVPJU6pbLTZPOhB5RkLzzEnHinGOtTtSvP93rHCST5NZy8vKxu/TZeHcen7yah2m21u08YWE087L13fj3lfNxdrRo2HNuMWVCj2Yx4jC25HOt6WttznKFgDB5yEnmz0CMYCeozbZTT11ZtsjUN3lLMm8uLmCKE8gSHOXCljPfyoRgfdGR941IlwtsO7RjHnRWJjBUFdlIbDicg5BwRjINdjur6t9Eo29595htFLaO/PL36Z2Xmylxrte5svutTeTe8ts4wljx3xu/JH7SlKkZGBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoD/2Q==";
    doc.addImage(imgData, "JPEG", 190, 40, 200, 200, "center");

    doc.setLineWidth(1.5);
    doc.setDrawColor(255, 113, 16);
    doc.line(20, 20, 580, 20);

    doc.setLineWidth(1.5);
    doc.setDrawColor(255, 113, 16);
    doc.line(20, 20, 20, 820);

    doc.setLineWidth(1.5);
    doc.setDrawColor(255, 113, 16);
    doc.line(580, 20, 580, 820);

    doc.setLineWidth(1.5);
    doc.setDrawColor(255, 113, 16);
    doc.line(20, 820, 580, 820);

    doc.setFontSize(30);
    doc.text(
      `${props.userData.firstName} ${props.userData.lastName}`,
      300,
      280,
      null,
      null,
      "center"
    );

    doc.setFontSize(15);
    doc.text(
      "has successfully completed modules of the course",
      300,
      320,
      null,
      null,
      "center"
    );

    doc.setFontSize(30);
    doc.text("Food Safety Level 2", 300, 360, null, null, "center");

    doc.setFontSize(15);
    doc.text(
      "A pass was achieved on the following modules:",
      300,
      390,
      null,
      null,
      "center"
    );

    chapters.forEach((item, i) => {
      doc.text(item, 50, 450 + i * 30);
    });

    doc.save("generatedCertificate.pdf");
  };

  return (
    <>
      <button
        className="certificateButton"
        data-test="certificateButton"
        onClick={PDFGenerator}
      >
        PRINT MY CERTIFICATE
      </button>
    </>
  );
};

const mapStateToProps = state => {
  return {
    userData: state.userDataReducer
  };
};

export default connect(mapStateToProps)(PDFCertificate);
