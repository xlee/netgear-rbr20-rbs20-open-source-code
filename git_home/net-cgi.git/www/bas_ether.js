function show_hidden_help_top_button(b){if(!isIE_or_Opera()||IE_version()>=8){Not_IE_show_hidden_help(b)}else{var a=top.document.getElementById("formframe_div").style.height.replace(/px/,"");if(b%2==0){document.getElementById("main").style.height=a-285;document.getElementById("help").style.display="";document.getElementById("help_switch").className="open_help"}else{document.getElementById("help").style.display="none";document.getElementById("help_switch").className="close_help";document.getElementById("main").style.height=a-165}}}function goto_basic_login_page(){if(((jp_multiPPPoE==1&&gui_region!="Japanese")||(select_type>0&&gui_region=="Japanese"))&&(netgear_region==""||netgear_region.toUpperCase()=="WW"||netgear_region.toUpperCase()=="JP")){goto_formframe("BAS_mulpppoe.htm")}else{if(select_type==0){goto_formframe("BAS_pppoe.htm")}else{if(select_type==1){goto_formframe("BAS_pptp.htm")}else{if(select_type==4&&have_l2tp==1){goto_formframe("BAS_l2tp.htm")}else{goto_formframe("BAS_pppoe.htm")}}}}}function setIP(b){var a=b.WANAssign[0].checked;setDisabled(a,b.WPethr1,b.WPethr2,b.WPethr3,b.WPethr4,b.WMask1,b.WMask2,b.WMask3,b.WMask4,b.WGateway1,b.WGateway2,b.WGateway3,b.WGateway4);if(b.WANAssign[1].checked){b.DNSAssign[1].checked=true;setDNS(b);if(document.getElementsByTagName("span")[0]!=null){b.DNSAssign[0].disabled=true;document.getElementsByTagName("span")[0].style.color="gray"}}else{if(document.getElementsByTagName("span")[0]!=null){document.getElementsByTagName("span")[0].style.color="black";b.DNSAssign[0].disabled=false}}DisableFixedIP=a}function setDNS(b){var a=b.DNSAssign[0].checked;if(b.WANAssign[1].checked){b.DNSAssign[1].checked=true;a=false}setDisabled(a,b.DAddr1,b.DAddr2,b.DAddr3,b.DAddr4,b.PDAddr1,b.PDAddr2,b.PDAddr3,b.PDAddr4);if(dns_third_flag==1){setDisabled(a,b.TDAddr1,b.TDAddr2,b.TDAddr3,b.TDAddr4)}DisableFixedDNS=a}function check_wizard_dhcp(a,b){cf=document.forms[0];if(consolidate_device_name==0){if(cf.system_name.value==""){alert("$info_mark_name $trigger_null");return false}for(i=0;i<cf.system_name.value.length;i++){if(isValidChar_space(cf.system_name.value.charCodeAt(i))==false){alert("$acname_not_allowed");return false}}}for(i=0;i<cf.domain_name.value.length;i++){if(isValidDdnsHost(cf.domain_name.value.charCodeAt(i))==false){alert("$doname_not_allowed");return false}}if(a==1){cf.run_test.value="test";if(b=="wiz"){cf.action="/apply.cgi?/WIZ_update.htm timestamp="+ts}}else{cf.run_test.value="no"}return true}function check_static_ip_mask_gtw(){cf=document.forms[0];cf.ether_ipaddr.value=cf.WPethr1.value+"."+cf.WPethr2.value+"."+cf.WPethr3.value+"."+cf.WPethr4.value;cf.ether_subnet.value=cf.WMask1.value+"."+cf.WMask2.value+"."+cf.WMask3.value+"."+cf.WMask4.value;cf.ether_gateway.value=cf.WGateway1.value+"."+cf.WGateway2.value+"."+cf.WGateway3.value+"."+cf.WGateway4.value;if(checksubnet(cf.ether_subnet.value,1)==false){alert("$invalid_mask");return false}if(checkipaddr(cf.ether_ipaddr.value)==false||is_sub_or_broad(cf.ether_ipaddr.value,cf.ether_ipaddr.value,cf.ether_subnet.value)==false){alert("$invalid_ip");return false}if(checkgateway(cf.ether_gateway.value)==false||is_sub_or_broad(cf.ether_gateway.value,cf.ether_gateway.value,cf.ether_subnet.value)==false){alert("$invalid_gateway");return false}if(isSameIp(cf.ether_ipaddr.value,cf.ether_gateway.value)==true){alert("$invalid_gateway");return false}return true}function check_RU_static_ip_mask_gtw(){cf=document.forms[0];cf.ether_ipaddr.value=cf.WPethr1.value+"."+cf.WPethr2.value+"."+cf.WPethr3.value+"."+cf.WPethr4.value;cf.ether_subnet.value=cf.WMask1.value+"."+cf.WMask2.value+"."+cf.WMask3.value+"."+cf.WMask4.value;cf.ether_gateway.value=cf.WGateway1.value+"."+cf.WGateway2.value+"."+cf.WGateway3.value+"."+cf.WGateway4.value;if(checksubnet(cf.ether_subnet.value,1)==false){alert(bh_invalid_mask);return false}if(checkipaddr(cf.ether_ipaddr.value)==false||is_sub_or_broad(cf.ether_ipaddr.value,cf.ether_ipaddr.value,cf.ether_subnet.value)==false){alert(bh_invalid_ip);return false}if(checkgateway(cf.ether_gateway.value)==false||is_sub_or_broad(cf.ether_gateway.value,cf.ether_gateway.value,cf.ether_subnet.value)==false){alert(bh_invalid_mask);return false}if(isSameIp(cf.ether_ipaddr.value,cf.ether_gateway.value)==true){alert(bh_invalid_gateway);return false}return true}function check_three_DNS(b){var a=document.forms[0];a.ether_dnsaddr1.value=a.DAddr1.value+"."+a.DAddr2.value+"."+a.DAddr3.value+"."+a.DAddr4.value;a.ether_dnsaddr2.value=a.PDAddr1.value+"."+a.PDAddr2.value+"."+a.PDAddr3.value+"."+a.PDAddr4.value;a.ether_dnsaddr3.value=a.TDAddr1.value+"."+a.TDAddr2.value+"."+a.TDAddr3.value+"."+a.TDAddr4.value;a.ether_ipaddr.value=a.WPethr1.value+"."+a.WPethr2.value+"."+a.WPethr3.value+"."+a.WPethr4.value;if(a.ether_dnsaddr1.value=="..."){a.ether_dnsaddr1.value=""}if(a.ether_dnsaddr2.value=="..."){a.ether_dnsaddr2.value=""}if(a.ether_dnsaddr3.value=="..."){a.ether_dnsaddr3.value=""}if(a.ether_dnsaddr1.value!=""){if(checkipaddr(a.ether_dnsaddr1.value)==false){alert("$invalid_primary_dns");return false}a.ether_dnsaddr1.value=address_parseInt(a.ether_dnsaddr1.value);if(b==true&&isSameIp(a.ether_dnsaddr1.value,a.ether_ipaddr.value)){alert("$invalid_primary_dns");return false}}if(a.ether_dnsaddr2.value!=""){if(checkipaddr(a.ether_dnsaddr2.value)==false){alert("$invalid_second_dns");return false}a.ether_dnsaddr2.value=address_parseInt(a.ether_dnsaddr2.value);if(b==true&&isSameIp(a.ether_dnsaddr2.value,a.ether_ipaddr.value)){alert("$invalid_second_dns");return false}}if(a.ether_dnsaddr3.value!=""){if(checkipaddr(a.ether_dnsaddr3.value)==false){alert("$invalid_third_dns");return false}a.ether_dnsaddr3.value=address_parseInt(a.ether_dnsaddr3.value);if(b==true&&isSameIp(a.ether_dnsaddr3.value,a.ether_ipaddr.value)){alert("$invalid_third_dns");return false}}if(a.ether_dnsaddr1.value==""&&a.ether_dnsaddr2.value==""&&a.ether_dnsaddr3.value==""){alert("$dns_must_specified");return false}return true}function check_static_dns(b){var a=document.forms[0];a.ether_dnsaddr1.value=a.DAddr1.value+"."+a.DAddr2.value+"."+a.DAddr3.value+"."+a.DAddr4.value;a.ether_dnsaddr2.value=a.PDAddr1.value+"."+a.PDAddr2.value+"."+a.PDAddr3.value+"."+a.PDAddr4.value;a.ether_ipaddr.value=a.WPethr1.value+"."+a.WPethr2.value+"."+a.WPethr3.value+"."+a.WPethr4.value;if(a.ether_dnsaddr1.value=="..."){a.ether_dnsaddr1.value=""}else{a.ether_dnsaddr1.value=address_parseInt(a.ether_dnsaddr1.value)}if(a.ether_dnsaddr2.value=="..."){a.ether_dnsaddr2.value=""}else{a.ether_dnsaddr2.value=address_parseInt(a.ether_dnsaddr2.value)}if(check_DNS(a.ether_dnsaddr1.value,a.ether_dnsaddr2.value,b,a.ether_ipaddr.value)){return true}else{return false}}function check_RU_static_dns(b){var a=document.forms[0];a.ether_dnsaddr1.value=a.DAddr1.value+"."+a.DAddr2.value+"."+a.DAddr3.value+"."+a.DAddr4.value;a.ether_dnsaddr2.value=a.PDAddr1.value+"."+a.PDAddr2.value+"."+a.PDAddr3.value+"."+a.PDAddr4.value;a.ether_ipaddr.value=a.WPethr1.value+"."+a.WPethr2.value+"."+a.WPethr3.value+"."+a.WPethr4.value;if(a.ether_dnsaddr1.value=="..."){a.ether_dnsaddr1.value=""}else{a.ether_dnsaddr1.value=address_parseInt(a.ether_dnsaddr1.value)}if(a.ether_dnsaddr2.value=="..."){a.ether_dnsaddr2.value=""}else{a.ether_dnsaddr2.value=address_parseInt(a.ether_dnsaddr2.value)}if(check_RU_DNS(a.ether_dnsaddr1.value,a.ether_dnsaddr2.value,b,a.ether_ipaddr.value)){return true}else{return false}}function check_ether_samesubnet(){var a=document.forms[0];a.ether_ipaddr.value=a.WPethr1.value+"."+a.WPethr2.value+"."+a.WPethr3.value+"."+a.WPethr4.value;a.ether_subnet.value=a.WMask1.value+"."+a.WMask2.value+"."+a.WMask3.value+"."+a.WMask4.value;a.ether_gateway.value=a.WGateway1.value+"."+a.WGateway2.value+"."+a.WGateway3.value+"."+a.WGateway4.value;if(isSameSubNet(a.ether_ipaddr.value,a.ether_subnet.value,lan_ip,lan_subnet)==true){alert("$same_lan_wan_subnet");return false}if(isSameSubNet(a.ether_ipaddr.value,lan_subnet,lan_ip,lan_subnet)==true){alert("$same_lan_wan_subnet");return false}if(isSameSubNet(a.ether_ipaddr.value,a.ether_subnet.value,lan_ip,a.ether_subnet.value)==true){alert("$same_lan_wan_subnet");return false}if(isSameIp(a.ether_ipaddr.value,lan_ip)==true){alert("$same_lan_wan_subnet");return false}return true}function check_wizard_static(a,c){var b=document.forms[0];if(check_static_ip_mask_gtw()==false){return false}if(check_static_dns(true)==false){return false}check_ether_samesubnet();if(a==1){b.run_test.value="test";if(c=="wiz"){b.action="/apply.cgi?/WIZ_update.htm timestamp="+ts}}else{b.run_test.value="no"}return true}function check_ether(c,a){format_IP("WPethr1","WPethr2","WPethr3","WPethr4","WMask1","WMask2","WMask3","WMask4","WGateway1","WGateway2","WGateway3","WGateway4","DAddr1","DAddr2","DAddr3","DAddr4","PDAddr1","PDAddr2","PDAddr3","PDAddr4","TDAddr1","TDAddr2","TDAddr3","TDAddr4");c.ether_ipaddr.value=c.WPethr1.value+"."+c.WPethr2.value+"."+c.WPethr3.value+"."+c.WPethr4.value;c.ether_subnet.value=c.WMask1.value+"."+c.WMask2.value+"."+c.WMask3.value+"."+c.WMask4.value;c.ether_gateway.value=c.WGateway1.value+"."+c.WGateway2.value+"."+c.WGateway3.value+"."+c.WGateway4.value;if(c.DNSAssign[1].checked){if(dns_third_flag==1){if(check_three_DNS(c.WANAssign[1].checked)==false){return false}}else{if(check_static_dns(c.WANAssign[1].checked)==false){return false}}}if(c.DNSAssign[0].checked){if(parental_control==1){if(confirm("$dis_opendns")==false){return false}}}if(check_wizard_dhcp(a,"bas")==false){return false}if(c.MACAssign[2].checked){the_mac=c.Spoofmac.value;if(the_mac.indexOf(":")==-1&&the_mac.length=="12"){var b=the_mac.substr(0,2)+":"+the_mac.substr(2,2)+":"+the_mac.substr(4,2)+":"+the_mac.substr(6,2)+":"+the_mac.substr(8,2)+":"+the_mac.substr(10,2);c.Spoofmac.value=b}else{if(the_mac.split("-").length==6){var b=the_mac.replace(/-/g,":");c.Spoofmac.value=b}}if(maccheck_multicast(c.Spoofmac.value)==false){return false}}if(c.WANAssign[1].checked==true){if(check_static_ip_mask_gtw()==false){return false}if(isSameSubNet(c.ether_ipaddr.value,c.ether_subnet.value,lan_ip,lan_subnet)==true){c.conflict_wanlan.value=1}if(isSameSubNet(c.ether_ipaddr.value,lan_subnet,lan_ip,lan_subnet)==true){c.conflict_wanlan.value=1}if(isSameSubNet(c.ether_ipaddr.value,c.ether_subnet.value,lan_ip,c.ether_subnet.value)==true){c.conflict_wanlan.value=1}if(isSameIp(c.ether_ipaddr.value,lan_ip)==true){c.conflict_wanlan.value=1}}c.hid_mtu_value.value=wan_mtu_now;if(old_wan_type!="dhcp"){c.change_wan_type.value=0;mtu_change(wanproto_type)}else{if(old_wan_assign=="1"){if(old_wan_ip!=c.ether_ipaddr.value&&c.WANAssign[1].checked){c.change_wan_type.value=0}else{if(c.WANAssign[0].checked){c.change_wan_type.value=0}else{c.change_wan_type.value=1}}}else{if(old_wan_assign=="0"){if(old_wan_ip!=c.ether_ipaddr.value&&c.WANAssign[1].checked){c.change_wan_type.value=0}else{c.change_wan_type.value=1}}}}if(c.WANAssign[1].checked&&c.MACAssign[2].checked){if(consolidate_device_name==0){if((c.ether_ipaddr.value==old_wan_ip)&&(c.Spoofmac.value==ether_get_this_mac)&&(c.system_name.value==system_name)){if(confirm("$reservation_dup")==false){return false}}}else{if((c.ether_ipaddr.value==old_wan_ip)&&(c.Spoofmac.value==ether_get_this_mac)){if(confirm("$reservation_dup")==false){return false}}}}c.hid_enable_vpn.value=vpn_enable;if(old_endis_ddns=="0"&&vpn_enable=="1"&&c.WANAssign[0].checked==true&&old_wan_assign=="1"){if(confirm("$no_change_static_ip")==true){c.hid_enable_vpn.value="0"}else{c.hid_enable_vpn.value="1";return false}}if(c.ether_ipaddr.value!=old_wan_ip&&vpn_enable=="1"&&c.WANAssign[1].checked==true&&old_endis_ddns!="1"){c.hid_vpn_detect_flag.value="1"}else{c.hid_vpn_detect_flag.value="0"}c.ether_ipaddr.value=address_parseInt(c.ether_ipaddr.value);c.ether_subnet.value=address_parseInt(c.ether_subnet.value);c.ether_gateway.value=address_parseInt(c.ether_gateway.value);parent.ether_post_flag=1;c.submit();return true}function check_welcome_dhcp(){var a=document.forms[0];if(consolidate_device_name==0){parent.account_name=a.system_name.value}parent.domain_name=a.domain_name.value;parent.welcome_wan_type=2;return true}function check_welcome_static(){var a=document.forms[0];a.ether_ipaddr.value=a.WPethr1.value+"."+a.WPethr2.value+"."+a.WPethr3.value+"."+a.WPethr4.value;a.ether_subnet.value=a.WMask1.value+"."+a.WMask2.value+"."+a.WMask3.value+"."+a.WMask4.value;a.ether_gateway.value=a.WGateway1.value+"."+a.WGateway2.value+"."+a.WGateway3.value+"."+a.WGateway4.value;a.ether_dnsaddr1.value=a.DAddr1.value+"."+a.DAddr2.value+"."+a.DAddr3.value+"."+a.DAddr4.value;a.ether_dnsaddr2.value=a.PDAddr1.value+"."+a.PDAddr2.value+"."+a.PDAddr3.value+"."+a.PDAddr4.value;if(a.ether_dnsaddr2.value=="..."){a.ether_dnsaddr2.value=""}if(check_wizard_static(0,"welcome")==false){return false}parent.welcome_wan_type=1;parent.static_ip=a.ether_ipaddr.value;parent.static_subnet=a.ether_subnet.value;parent.static_gateway=a.ether_gateway.value;parent.static_dns1=a.ether_dnsaddr1.value;parent.static_dns2=a.ether_dnsaddr2.value;return true}function RU_welcome_static(){var a=document.forms[0];a.ether_ipaddr.value=a.WPethr1.value+"."+a.WPethr2.value+"."+a.WPethr3.value+"."+a.WPethr4.value;a.ether_subnet.value=a.WMask1.value+"."+a.WMask2.value+"."+a.WMask3.value+"."+a.WMask4.value;a.ether_gateway.value=a.WGateway1.value+"."+a.WGateway2.value+"."+a.WGateway3.value+"."+a.WGateway4.value;a.ether_dnsaddr1.value=a.DAddr1.value+"."+a.DAddr2.value+"."+a.DAddr3.value+"."+a.DAddr4.value;a.ether_dnsaddr2.value=a.PDAddr1.value+"."+a.PDAddr2.value+"."+a.PDAddr3.value+"."+a.PDAddr4.value;if(check_RU_static_ip_mask_gtw()==false){return false}if(a.ether_dnsaddr2.value=="..."){a.ether_dnsaddr2.value=""}if(check_wizard_static(0,"welcome")==false){return false}parent.welcome_wan_type=1;parent.static_ip=a.ether_ipaddr.value;parent.static_subnet=a.ether_subnet.value;parent.static_gateway=a.ether_gateway.value;parent.static_dns1=a.ether_dnsaddr1.value;parent.static_dns2=a.ether_dnsaddr2.value;parent.conflict_wanlan=a.conflict_wanlan.value;if(parent.isp_type=="9"||parent.isp_type=="13"){alert(attention_static_ip);location.href="RU_isp_spoof.htm"}else{if(parent.isp_type=="3"){location.href="RU_isp_spoof.htm"}else{if(parent.isp_type=="4"){a.ether_ipaddr.value=a.ether_ipaddr.value;a.ether_subnet.value=a.ether_subnet.value;a.ether_gateway.value=a.ether_gateway.value;a.ether_dnsaddr1.value=a.ether_dnsaddr1.value;a.ether_dnsaddr2.value=a.ether_dnsaddr2.value;a.DNSAssign.value="1";a.WANAssign.value="static";a.welcome_wan_type.value=1;a.submit()}else{if(parent.isp_type=="6"){alert(attention_static_ip);a.pppoe_dual_ipaddr.value=a.ether_ipaddr.value;a.pppoe_dual_subnet.value=a.ether_subnet.value;a.pppoe_dual_gateway.value="";a.welcome_wan_type.value="3";a.submit()}else{if(parent.isp_type=="14"){alert(attention_static_ip);a.l2tp_myip.value=a.ether_ipaddr.value;a.l2tp_mynetmask.value=a.ether_subnet.value;a.l2tp_gateway.value=a.ether_gateway.value;a.l2tp_dnsaddr1.value=a.ether_dnsaddr1.value;a.l2tp_dnsaddr2.value=a.ether_dnsaddr2.value;a.DNSAssign.value="1";a.WANAssign.value="1";a.STATIC_DNS.value=parent.STATIC_DNS;a.welcome_wan_type.value="5";a.submit()}else{if(parent.isp_type=="10"){alert(attention_static_ip);a.pptp_myip.value=a.ether_ipaddr.value;a.pptp_mynetmask.value=a.ether_subnet.value;a.pptp_gateway.value=a.ether_gateway.value;a.pptp_dnsaddr1.value=a.ether_dnsaddr1.value;a.pptp_dnsaddr2.value=a.ether_dnsaddr2.value;a.DNSAssign.value="1";a.WANAssign.value="1";a.STATIC_DNS.value=parent.STATIC_DNS;a.welcome_wan_type.value="4";a.submit()}}}}}}}function check_RU_dhcp_static(){var a=document.forms[0];a.ether_ipaddr.value=a.WPethr1.value+"."+a.WPethr2.value+"."+a.WPethr3.value+"."+a.WPethr4.value;a.ether_subnet.value=a.WMask1.value+"."+a.WMask2.value+"."+a.WMask3.value+"."+a.WMask4.value;a.ether_gateway.value=a.WGateway1.value+"."+a.WGateway2.value+"."+a.WGateway3.value+"."+a.WGateway4.value;if(a.WANAssign[1].checked==true){if(check_RU_static_ip_mask_gtw()==false){return false}if(isSameSubNet(a.ether_ipaddr.value,a.ether_subnet.value,lan_ip,lan_subnet)==true){a.conflict_wanlan.value=1}if(isSameSubNet(a.ether_ipaddr.value,lan_subnet,lan_ip,lan_subnet)==true){a.conflict_wanlan.value=1}if(isSameSubNet(a.ether_ipaddr.value,a.ether_subnet.value,lan_ip,a.ether_subnet.value)==true){a.conflict_wanlan.value=1}if(isSameIp(a.ether_ipaddr.value,lan_ip)==true){a.conflict_wanlan.value=1}parent.welcome_wan_type=1}else{a.ether_ipaddr.value="";a.ether_subnet.value="";a.ether_gateway.value="";a.conflict_wanlan.value=0;parent.welcome_wan_type=2}if(a.DNSAssign[1].checked){if(check_RU_static_dns(a.WANAssign[1].checked)==false){return false}}else{a.ether_dnsaddr1.value="";a.ether_dnsaddr2.value=""}parent.static_ip=a.ether_ipaddr.value;parent.static_subnet=a.ether_subnet.value;parent.static_gateway=a.ether_gateway.value;parent.static_dns1=a.ether_dnsaddr1.value;parent.static_dns2=a.ether_dnsaddr2.value;parent.conflict_wanlan=a.conflict_wanlan.value;location.href="RU_manual_spoof.htm"}function RU_welcome_pppoe_static(){var a=document.forms[0];a.ether_ipaddr.value=a.WPethr1.value+"."+a.WPethr2.value+"."+a.WPethr3.value+"."+a.WPethr4.value;a.ether_subnet.value=a.WMask1.value+"."+a.WMask2.value+"."+a.WMask3.value+"."+a.WMask4.value;if(checkipaddr(a.ether_ipaddr.value)==false||is_sub_or_broad(a.ether_ipaddr.value,a.ether_ipaddr.value,a.ether_subnet.value)==false){alert(bh_invalid_ip);return false}if(checksubnet(a.ether_subnet.value)==false){alert(bh_invalid_mask);return false}if(isSameSubNet(a.ether_ipaddr.value,a.ether_subnet.value,lan_ip,lan_subnet)==true){a.conflict_wanlan.value=1}if(isSameSubNet(a.ether_ipaddr.value,lan_subnet,lan_ip,lan_subnet)==true){a.conflict_wanlan.value=1}if(isSameSubNet(a.ether_ipaddr.value,a.ether_subnet.value,lan_ip,a.ether_subnet.value)==true){a.conflict_wanlan.value=1}if(isSameIp(a.ether_ipaddr.value,lan_ip)==true){a.conflict_wanlan.value=1}a.run_test.value="no";parent.pppoe_eth_ip=a.ether_ipaddr.value;parent.pppoe_eth_netmask=a.ether_subnet.value;parent.static_ip=a.ether_ipaddr.value;parent.static_subnet=a.ether_subnet.value;parent.conflict_wanlan=a.conflict_wanlan.value;if(parent.isp_type=="6"){alert(attention_static_ip);a.pppoe_dual_ipaddr.value=a.ether_ipaddr.value;a.pppoe_dual_subnet.value=a.ether_subnet.value;a.pppoe_dual_gateway.value="";a.pppoe_dnsaddr1.value=parent.static_dns1;a.pppoe_dnsaddr2.value=parent.static_dns2;a.pppoe_servername.value=parent.pppoe_server;if(a.pppoe_dnsaddr1.value!=""||a.pppoe_dnsaddr2.value!=""){a.DNSAssign.value="1"}else{a.DNSAssign.value="0"}a.welcome_wan_type.value="3";a.submit()}else{if(parent.isp_type=="5"){alert(attention_static_ip);location.href="RU_isp_spoof.htm"}else{if(parent.isp_type=="88"){alert(attention_static_ip);a.pppoe_dual_ipaddr.value=a.ether_ipaddr.value;a.pppoe_dual_subnet.value=a.ether_subnet.value;a.pppoe_dual_gateway.value="";a.pppoe_dnsaddr1.value="";a.pppoe_dnsaddr2.value="";a.welcome_wan_type.value="3";a.submit()}}}};