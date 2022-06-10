# 好用工具

## 下划线转驼峰

```
public static void main(String[] args) {
    String s = "show_comment";
    String prefixStr = "is_";

    // 先去除is_
    if (s.startsWith(prefixStr)) {
        s = s.substring(prefixStr.length());
    }
    s = s.toLowerCase();
    Pattern compile = Pattern.compile("_[a-z]");
    Matcher matcher = compile.matcher(s);
    StringBuffer sb = new StringBuffer();
    while(matcher.find()) {
        matcher.appendReplacement(sb,  matcher.group(0).toUpperCase().replace("_",""));
    }
    matcher.appendTail(sb);

    System.out.println(sb.toString());
}
```