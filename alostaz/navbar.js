class SpecialHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
                <header>
                <!-- <i></i> -->
                <nav>
                    <ul>
                        <li><a href="/alostaz">الصفحة الرئيسية</a></li>
                        <li>
                            <div class="dropdown">
                                <button class="dropbtn">الصف الدراسي</button>
                                <div class="dropdown-content">
                                    <ul>
                                        <li>
                                            <div class="dropdown2">
                                                <button class="dropbtn2">المرحلة الابتدائية</button>
                                                <div class="dropdown-content2">
                                                    <ul>
                                                        <li>
                                                            <a href=""></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li><a href="/alostaz/sessions">المحاضرات</a></li>
                        <li><a href="/alostaz/pricing">الاسعار</a></li>
                        <li><a href="/alostaz/contact">تواصل معنا</a></li>
                    </ul>
                </nav>
                <!-- <ul class="sec">
                    Account
                </ul> -->
            </header>
        `;
  }
}

class SpecialFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <footer>
            <p>Copyright @ <a href='mailto:el-ostaz222@yahoo.com'>el-ostaz222@yahoo.com</a></p>
            <i class="fa fa-facebook"><a href="facebook.com"></a></i><br><br>
            <i class="fa fa-youtube"><a href="youtube.com"></a></i>
        </footer>
      `;
  }
}

customElements.define("special-header", SpecialHeader);
customElements.define("special-footer", SpecialFooter);
