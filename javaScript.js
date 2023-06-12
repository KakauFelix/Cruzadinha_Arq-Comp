var pontos = 0;

function validarCruzadinha() {

    // 1. CPU
    var c_cpu_cs = ipt_c_cpu_cs.value;
    var p_cpu = ipt_p_cpu.value;
    var u_cpu = ipt_u_cpu.value;
    
    if (c_cpu_cs == '') {
        ipt_c_cpu_cs.style.backgroundColor = 'white';
    } else if (c_cpu_cs.toUpperCase() == 'C') {
        ipt_c_cpu_cs.style.backgroundColor = 'green';
    } else {
        ipt_c_cpu_cs.style.backgroundColor = 'red';
    }
 
    if (p_cpu == '') {
        ipt_p_cpu.style.backgroundColor = 'white';
    } else if (p_cpu.toUpperCase() == 'P') {
        ipt_p_cpu.style.backgroundColor = 'green';
    } else {
        ipt_p_cpu.style.backgroundColor = 'red';
    }
    
    if (u_cpu == '') {
        ipt_u_cpu.style.backgroundColor = 'white';
    } else if (u_cpu.toUpperCase() == 'U') {
        ipt_u_cpu.style.backgroundColor = 'green';
    } else {
        ipt_u_cpu.style.backgroundColor = 'red';
    }

    // 2. ULA
    var u_ula_quad = ipt_u_ula_quad.value;
    var l_ula = ipt_l_ula.value;
    var a_ula_flash = ipt_a_ula_flash.value;
    
    if (u_ula_quad == '') {
        ipt_u_ula_quad.style.backgroundColor = 'white';
    } else if (u_ula_quad.toUpperCase() == 'U') {
        ipt_u_ula_quad.style.backgroundColor = 'green';
    } else {
        ipt_u_ula_quad.style.backgroundColor = 'red';
    }
        
    if (l_ula == '') {
        ipt_l_ula.style.backgroundColor = 'white';
    } else if (l_ula.toUpperCase() == 'L') {
        ipt_l_ula.style.backgroundColor = 'green';
    } else {
        ipt_l_ula.style.backgroundColor = 'red';
    }
        
    if (a_ula_flash == '') {
        ipt_a_ula_flash.style.backgroundColor = 'white';
    } else if (a_ula_flash.toUpperCase() == 'A') {
        ipt_a_ula_flash.style.backgroundColor = 'green';
    } else {
        ipt_a_ula_flash.style.backgroundColor = 'red';
    }

    // 3. Registradores
    var r_reg = ipt_r_reg.value;
    var e_reg = ipt_e_reg.value;
    var g_reg = ipt_g_reg.value;
    var i_reg_i5 = ipt_i_reg_i5.value;
    var s_reg_threads = ipt_s_reg_threads.value;
    var t_reg = ipt_t_reg.value;
    var r2_reg = ipt_r2_reg.value;
    var a_reg_dma = ipt_a_reg_dma.value;
    var d_reg = ipt_d_reg.value;
    var o_reg = ipt_o_reg.value;
    var r3_reg = ipt_r3_reg.value;
    var e2_reg = ipt_e2_reg.value;
    var s_reg = ipt_s_reg.value;

    if (r_reg == '') {
        ipt_r_reg.style.backgroundColor = 'white';
    } else if (r_reg.toUpperCase() == 'R') {
        ipt_r_reg.style.backgroundColor = 'green';
    } else {
        ipt_r_reg.style.backgroundColor = 'red';
    }
        
    if (e_reg == '') {
        ipt_e_reg.style.backgroundColor = 'white';
    } else if (e_reg.toUpperCase() == 'E') {
        ipt_e_reg.style.backgroundColor = 'green';
    } else {
        ipt_e_reg.style.backgroundColor = 'red';
    }
        
    if (g_reg == '') {
        ipt_g_reg.style.backgroundColor = 'white';
    } else if (g_reg.toUpperCase() == 'G') {
        ipt_g_reg.style.backgroundColor = 'green';
    } else {
        ipt_g_reg.style.backgroundColor = 'red';
    }

    if (i_reg_i5 == '') {
        ipt_i_reg_i5.style.backgroundColor = 'white';
    } else if (i_reg_i5.toUpperCase() == 'I') {
        ipt_i_reg_i5.style.backgroundColor = 'green';
    } else {
        ipt_i_reg_i5.style.backgroundColor = 'red';
    }
        
    if (s_reg_threads == '') {
        ipt_s_reg_threads.style.backgroundColor = 'white';
    } else if (s_reg_threads.toUpperCase() == 'S') {
        ipt_s_reg_threads.style.backgroundColor = 'green';
    } else {
        ipt_s_reg_threads.style.backgroundColor = 'red';
    }
        
    if (t_reg == '') {
        ipt_t_reg.style.backgroundColor = 'white';
    } else if (t_reg.toUpperCase() == 'T') {
        ipt_t_reg.style.backgroundColor = 'green';
    } else {
        ipt_t_reg.style.backgroundColor = 'red';
    }

    if (r_reg == '') {
        ipt_r_reg.style.backgroundColor = 'white';
    } else if (r_reg.toUpperCase() == 'R') {
        ipt_r_reg.style.backgroundColor = 'green';
    } else {
        ipt_r_reg.style.backgroundColor = 'red';
    }
        
    if (r2_reg == '') {
        ipt_r2_reg.style.backgroundColor = 'white';
    } else if (r2_reg.toUpperCase() == 'R') {
        ipt_r2_reg.style.backgroundColor = 'green';
    } else {
        ipt_r2_reg.style.backgroundColor = 'red';
    }
        
    if (a_reg_dma == '') {
        ipt_a_reg_dma.style.backgroundColor = 'white';
    } else if (a_reg_dma.toUpperCase() == 'A') {
        ipt_a_reg_dma.style.backgroundColor = 'green';
    } else {
        ipt_a_reg_dma.style.backgroundColor = 'red';
    }

    if (d_reg == '') {
        ipt_d_reg.style.backgroundColor = 'white';
    } else if (d_reg.toUpperCase() == 'D') {
        ipt_d_reg.style.backgroundColor = 'green';
    } else {
        ipt_d_reg.style.backgroundColor = 'red';
    }
        
    if (o_reg == '') {
        ipt_o_reg.style.backgroundColor = 'white';
    } else if (o_reg.toUpperCase() == 'O') {
        ipt_o_reg.style.backgroundColor = 'green';
    } else {
        ipt_o_reg.style.backgroundColor = 'red';
    }
        
    if (r3_reg == '') {
        ipt_r3_reg.style.backgroundColor = 'white';
    } else if (r3_reg.toUpperCase() == 'R') {
        ipt_r3_reg.style.backgroundColor = 'green';
    } else {
        ipt_r3_reg.style.backgroundColor = 'red';
    }

    if (e2_reg == '') {
        ipt_e2_reg.style.backgroundColor = 'white';
    } else if (e2_reg.toUpperCase() == 'E') {
        ipt_e2_reg.style.backgroundColor = 'green';
    } else {
        ipt_e2_reg.style.backgroundColor = 'red';
    }

    if (s_reg == '') {
        ipt_s_reg.style.backgroundColor = 'white';
    } else if (s_reg.toUpperCase() == 'S') {
        ipt_s_reg.style.backgroundColor = 'green';
    } else {
        ipt_s_reg.style.backgroundColor = 'red';
    }

     // 4. RAM
     var r_ram = ipt_r_ram.value;
     var a_ram_dataBus = ipt_a_ram.value;
     var m_ram_eprom = ipt_m_ram_eprom.value;

     if (r_ram == '') {
        ipt_r_ram.style.backgroundColor = 'white';
    } else if (r_ram.toUpperCase() == 'R') {
        ipt_r_ram.style.backgroundColor = 'green';
    } else {
        ipt_r_ram.style.backgroundColor = 'red';
    }

    if (a_ram_dataBus == '') {
        ipt_a_ram.style.backgroundColor = 'white';
    } else if (a_ram_dataBus.toUpperCase() == 'A') {
        ipt_a_ram.style.backgroundColor = 'green';
    } else {
        ipt_a_ram.style.backgroundColor = 'red';
    }

    if (m_ram_eprom == '') {
        ipt_m_ram_eprom.style.backgroundColor = 'white';
    } else if (m_ram_eprom.toUpperCase() == 'M') {
        ipt_m_ram_eprom.style.backgroundColor = 'green';
    } else {
        ipt_m_ram_eprom.style.backgroundColor = 'red';
    }

    // 5. ROM
    var r_rom_threads = ipt_r_rom_threads.value;
    var o_rom_dualCore = ipt_o_rom_dualCore.value;
    var m_rom = ipt_m_rom.value;

    if (r_rom_threads == '') {
        ipt_r_rom_threads.style.backgroundColor = 'white';
    } else if (r_rom_threads.toUpperCase() == 'R') {
        ipt_r_rom_threads.style.backgroundColor = 'green';
    } else {
        ipt_r_rom_threads.style.backgroundColor = 'red';
    }

    if (o_rom_dualCore == '') {
        ipt_o_rom_dualCore.style.backgroundColor = 'white';
    } else if (o_rom_dualCore.toUpperCase() == 'O') {
        ipt_o_rom_dualCore.style.backgroundColor = 'green';
    } else {
        ipt_o_rom_dualCore.style.backgroundColor = 'red';
    }

    if (m_rom == '') {
        ipt_m_rom.style.backgroundColor = 'white';
    } else if (m_rom.toUpperCase() == 'M') {
        ipt_m_rom.style.backgroundColor = 'green';
    } else {
        ipt_m_rom.style.backgroundColor = 'red';
    }

    // 6. EPROM
    var e_eprom = ipt_e_eprom.value;
    var p_eprom = ipt_p_eprom.value;
    var r_eprom_quadCore = ipt_r_eprom_quadCore.value;
    var o_eprom = ipt_o_eprom.value;

    if (e_eprom == '') {
        ipt_e_eprom.style.backgroundColor = 'white';
    } else if (e_eprom.toUpperCase() == 'E') {
        ipt_e_eprom.style.backgroundColor = 'green';
    } else {
        ipt_e_eprom.style.backgroundColor = 'red';
    }

    if (p_eprom == '') {
        ipt_p_eprom.style.backgroundColor = 'white';
    } else if (p_eprom.toUpperCase() == 'P') {
        ipt_p_eprom.style.backgroundColor = 'green';
    } else {
        ipt_p_eprom.style.backgroundColor = 'red';
    }

    if (r_eprom_quadCore == '') {
        ipt_r_eprom_quadCore.style.backgroundColor = 'white';
    } else if (r_eprom_quadCore.toUpperCase() == 'R') {
        ipt_r_eprom_quadCore.style.backgroundColor = 'green';
    } else {
        ipt_r_eprom_quadCore.style.backgroundColor = 'red';
    }

    if (o_eprom == '') {
        ipt_o_eprom.style.backgroundColor = 'white';
    } else if (o_eprom.toUpperCase() == 'O') {
        ipt_o_eprom.style.backgroundColor = 'green';
    } else {
        ipt_o_eprom.style.backgroundColor = 'red';
    }

    // 7. FLASH
    var f_flash = ipt_f_flash.value;
    var l_flash = ipt_l_flash.value;
    var s_flash_cs = ipt_s_flash.value;
    var h_flash = ipt_h_flash.value;

    if (f_flash == '') {
        ipt_f_flash.style.backgroundColor = 'white';
    } else if (f_flash.toUpperCase() == 'F') {
        ipt_f_flash.style.backgroundColor = 'green';
    } else {
        ipt_f_flash.style.backgroundColor = 'red';
    }

    if (l_flash == '') {
        ipt_l_flash.style.backgroundColor = 'white';
    } else if (l_flash.toUpperCase() == 'L') {
        ipt_l_flash.style.backgroundColor = 'green';
    } else {
        ipt_l_flash.style.backgroundColor = 'red';
    }

    if (s_flash_cs == '') {
        ipt_s_flash.style.backgroundColor = 'white';
    } else if (s_flash_cs.toUpperCase() == 'S') {
        ipt_s_flash.style.backgroundColor = 'green';
    } else {
        ipt_s_flash.style.backgroundColor = 'red';
    }

    if (h_flash == '') {
        ipt_h_flash.style.backgroundColor = 'white';
    } else if (h_flash.toUpperCase() == 'H') {
        ipt_h_flash.style.backgroundColor = 'green';
    } else {
        ipt_h_flash.style.backgroundColor = 'red';
    }

    // 8. Memória de Massa
    var m_memoriaDeMassa = ipt_m_memoriaDeMassa.value;
    var e_memoriaDeMassa = ipt_e_memoriaDeMassa.value;
    var m1_memoriaDeMassa = ipt_m1_memoriaDeMassa.value;
    var o_memoriaDeMassa = ipt_o_memoriaDeMassa.value;
    var r_memoriaDeMassa = ipt_r_memoriaDeMassa.value;
    var i_memoriaDeMassa_i7 = ipt_i_memoriaDeMassa_i7.value;
    var a_memoriaDeMassa = ipt_a_memoriaDeMassa.value;
    var d_memoriaDeMassa = ipt_d_memoriaDeMassa.value;
    var e1_memoriaDeMassa = ipt_e1_memoriaDeMassa.value;
    var m2_memoriaDeMassa = ipt_m2_memoriaDeMassa.value;
    var a1_memoriaDeMassa_dualCore = ipt_a1_memoriaDeMassa_dualCore.value;
    var s_memoriaDeMassa_addressBus = ipt_s_memoriaDeMassa_addressBus.value;
    var s1_memoriaDeMassa = ipt_s1_memoriaDeMassa.value;
    var a2_memoriaDeMassa = ipt_a2_memoriaDeMassa.value;

    if (m_memoriaDeMassa == '') {
        ipt_m_memoriaDeMassa.style.backgroundColor = 'white';
    } else if (m_memoriaDeMassa.toUpperCase() == 'M') {
        ipt_m_memoriaDeMassa.style.backgroundColor = 'green';
    } else {
        ipt_m_memoriaDeMassa.style.backgroundColor = 'red';
    }

    if (e_memoriaDeMassa == '') {
        ipt_e_memoriaDeMassa.style.backgroundColor = 'white';
    } else if (e_memoriaDeMassa.toUpperCase() == 'E') {
        ipt_e_memoriaDeMassa.style.backgroundColor = 'green';
    } else {
        ipt_e_memoriaDeMassa.style.backgroundColor = 'red';
    }

    if (m1_memoriaDeMassa == '') {
        ipt_m1_memoriaDeMassa.style.backgroundColor = 'white';
    } else if (m1_memoriaDeMassa.toUpperCase() == 'M') {
        ipt_m1_memoriaDeMassa.style.backgroundColor = 'green';
    } else {
        ipt_m1_memoriaDeMassa.style.backgroundColor = 'red';
    }

    if (o_memoriaDeMassa == '') {
        ipt_o_memoriaDeMassa.style.backgroundColor = 'white';
    } else if (o_memoriaDeMassa.toUpperCase() == 'O') {
        ipt_o_memoriaDeMassa.style.backgroundColor = 'green';
    } else {
        ipt_o_memoriaDeMassa.style.backgroundColor = 'red';
    }

    if (r_memoriaDeMassa == '') {
        ipt_r_memoriaDeMassa.style.backgroundColor = 'white';
    } else if (r_memoriaDeMassa.toUpperCase() == 'R') {
        ipt_r_memoriaDeMassa.style.backgroundColor = 'green';
    } else {
        ipt_r_memoriaDeMassa.style.backgroundColor = 'red';
    }

    if (i_memoriaDeMassa_i7 == '') {
        ipt_i_memoriaDeMassa_i7.style.backgroundColor = 'white';
    } else if (i_memoriaDeMassa_i7.toUpperCase() == 'I') {
        ipt_i_memoriaDeMassa_i7.style.backgroundColor = 'green';
    } else {
        ipt_i_memoriaDeMassa_i7.style.backgroundColor = 'red';
    }

    if (a_memoriaDeMassa == '') {
        ipt_a_memoriaDeMassa.style.backgroundColor = 'white';
    } else if (a_memoriaDeMassa.toUpperCase() == 'A') {
        ipt_a_memoriaDeMassa.style.backgroundColor = 'green';
    } else {
        ipt_a_memoriaDeMassa.style.backgroundColor = 'red';
    }

    if (d_memoriaDeMassa == '') {
        ipt_d_memoriaDeMassa.style.backgroundColor = 'white';
    } else if (d_memoriaDeMassa.toUpperCase() == 'D') {
        ipt_d_memoriaDeMassa.style.backgroundColor = 'green';
    } else {
        ipt_d_memoriaDeMassa.style.backgroundColor = 'red';
    }

    if (e1_memoriaDeMassa == '') {
        ipt_e1_memoriaDeMassa.style.backgroundColor = 'white';
    } else if (e1_memoriaDeMassa.toUpperCase() == 'E') {
        ipt_e1_memoriaDeMassa.style.backgroundColor = 'green';
    } else {
        ipt_e1_memoriaDeMassa.style.backgroundColor = 'red';
    }

    if (m2_memoriaDeMassa == '') {
        ipt_m2_memoriaDeMassa.style.backgroundColor = 'white';
    } else if (m2_memoriaDeMassa.toUpperCase() == 'M') {
        ipt_m2_memoriaDeMassa.style.backgroundColor = 'green';
    } else {
        ipt_m2_memoriaDeMassa.style.backgroundColor = 'red';
    }

    if (a1_memoriaDeMassa_dualCore == '') {
        ipt_a1_memoriaDeMassa_dualCore.style.backgroundColor = 'white';
    } else if (a1_memoriaDeMassa_dualCore.toUpperCase() == 'A') {
        ipt_a1_memoriaDeMassa_dualCore.style.backgroundColor = 'green';
    } else {
        ipt_a1_memoriaDeMassa_dualCore.style.backgroundColor = 'red';
    }

    if (s_memoriaDeMassa_addressBus == '') {
        ipt_s_memoriaDeMassa_addressBus.style.backgroundColor = 'white';
    } else if (s_memoriaDeMassa_addressBus.toUpperCase() == 'S') {
        ipt_s_memoriaDeMassa_addressBus.style.backgroundColor = 'green';
    } else {
        ipt_s_memoriaDeMassa_addressBus.style.backgroundColor = 'red';
    }

    if (s1_memoriaDeMassa == '') {
        ipt_s1_memoriaDeMassa.style.backgroundColor = 'white';
    } else if (s1_memoriaDeMassa.toUpperCase() == 'S') {
        ipt_s1_memoriaDeMassa.style.backgroundColor = 'green';
    } else {
        ipt_s1_memoriaDeMassa.style.backgroundColor = 'red';
    }

    if (a2_memoriaDeMassa == '') {
        ipt_a2_memoriaDeMassa.style.backgroundColor = 'white';
    } else if (a2_memoriaDeMassa.toUpperCase() == 'A') {
        ipt_a2_memoriaDeMassa.style.backgroundColor = 'green';
    } else {
        ipt_a2_memoriaDeMassa.style.backgroundColor = 'red';
    }

    // 9. DMA
    var d_dma = ipt_d_dma.value;
    var m_dma = ipt_m_dma.value;

    if (d_dma == '') {
        ipt_d_dma.style.backgroundColor = 'white';
    } else if (d_dma.toUpperCase() == 'D') {
        ipt_d_dma.style.backgroundColor = 'green';
    } else {
        ipt_d_dma.style.backgroundColor = 'red';
    }

    if (m_dma == '') {
        ipt_m_dma.style.backgroundColor = 'white';
    } else if (m_dma.toUpperCase() == 'M') {
        ipt_m_dma.style.backgroundColor = 'green';
    } else {
        ipt_m_dma.style.backgroundColor = 'red';
    }

    // 10. CS - OK

    // 11. Address Bus
    var a_addressBus = ipt_a_addressBus.value;
    var d_addressBus = ipt_d_addressBus.value;
    var d1_addressBus = ipt_d1_addressBus.value;
    var r_addressBus = ipt_r_addressBus.value;
    var e_addressBus = ipt_e_addressBus.value;
    var s_addressBus = ipt_s_addressBus.value;
    var s1_addressBus_dataBus = ipt_s1_addressBus_dataBus.value;
    var b_addressBus = ipt_b_addressBus.value;
    var u_addressBus = ipt_u_addressBus.value;

    if (a_addressBus == '') {
        ipt_a_addressBus.style.backgroundColor = 'white';
    } else if (a_addressBus.toUpperCase() == 'A') {
        ipt_a_addressBus.style.backgroundColor = 'green';
    } else {
        ipt_a_addressBus.style.backgroundColor = 'red';
    }

    if (d_addressBus == '') {
        ipt_d_addressBus.style.backgroundColor = 'white';
    } else if (d_addressBus.toUpperCase() == 'D') {
        ipt_d_addressBus.style.backgroundColor = 'green';
    } else {
        ipt_d_addressBus.style.backgroundColor = 'red';
    }
    
    if (d1_addressBus == '') {
        ipt_d1_addressBus.style.backgroundColor = 'white';
    } else if (d1_addressBus.toUpperCase() == 'D') {
        ipt_d1_addressBus.style.backgroundColor = 'green';
    } else {
        ipt_d1_addressBus.style.backgroundColor = 'red';
    }

    if (r_addressBus == '') {
        ipt_r_addressBus.style.backgroundColor = 'white';
    } else if (r_addressBus.toUpperCase() == 'R') {
        ipt_r_addressBus.style.backgroundColor = 'green';
    } else {
        ipt_r_addressBus.style.backgroundColor = 'red';
    }

    if (e_addressBus == '') {
        ipt_e_addressBus.style.backgroundColor = 'white';
    } else if (e_addressBus.toUpperCase() == 'E') {
        ipt_e_addressBus.style.backgroundColor = 'green';
    } else {
        ipt_e_addressBus.style.backgroundColor = 'red';
    }

    if (s_addressBus == '') {
        ipt_s_addressBus.style.backgroundColor = 'white';
    } else if (s_addressBus.toUpperCase() == 'S') {
        ipt_s_addressBus.style.backgroundColor = 'green';
    } else {
        ipt_s_addressBus.style.backgroundColor = 'red';
    }
    
    if (s1_addressBus_dataBus == '') {
        ipt_s1_addressBus_dataBus.style.backgroundColor = 'white';
    } else if (s1_addressBus_dataBus.toUpperCase() == 'S') {
        ipt_s1_addressBus_dataBus.style.backgroundColor = 'green';
    } else {
        ipt_s1_addressBus_dataBus.style.backgroundColor = 'red';
    }

    if (b_addressBus == '') {
        ipt_b_addressBus.style.backgroundColor = 'white';
    } else if (b_addressBus.toUpperCase() == 'B') {
        ipt_b_addressBus.style.backgroundColor = 'green';
    } else {
        ipt_b_addressBus.style.backgroundColor = 'red';
    }

    if (u_addressBus == '') {
        ipt_u_addressBus.style.backgroundColor = 'white';
    } else if (u_addressBus.toUpperCase() == 'U') {
        ipt_u_addressBus.style.backgroundColor = 'green';
    } else {
        ipt_u_addressBus.style.backgroundColor = 'red';
    }

    // 12. Data Bus
    var d_dataBus = ipt_d_dataBus.value;
    var t_dataBus = ipt_t_dataBus.value;
    var a1_dataBus = ipt_a1_dataBus.value;
    var b_dataBus = ipt_b_dataBus.value;
    var u_dataBus = ipt_u_dataBus.value;

    if (d_dataBus == '') {
        ipt_d_dataBus.style.backgroundColor = 'white';
    } else if (d_dataBus.toUpperCase() == 'D') {
        ipt_d_dataBus.style.backgroundColor = 'green';
    } else {
        ipt_d_dataBus.style.backgroundColor = 'red';
    }

    if (t_dataBus == '') {
        ipt_t_dataBus.style.backgroundColor = 'white';
    } else if (t_dataBus.toUpperCase() == 'T') {
        ipt_t_dataBus.style.backgroundColor = 'green';
    } else {
        ipt_t_dataBus.style.backgroundColor = 'red';
    }

    if (a1_dataBus == '') {
        ipt_a1_dataBus.style.backgroundColor = 'white';
    } else if (a1_dataBus.toUpperCase() == 'A') {
        ipt_a1_dataBus.style.backgroundColor = 'green';
    } else {
        ipt_a1_dataBus.style.backgroundColor = 'red';
    }

    if (b_dataBus == '') {
        ipt_b_dataBus.style.backgroundColor = 'white';
    } else if (b_dataBus.toUpperCase() == 'B') {
        ipt_b_dataBus.style.backgroundColor = 'green';
    } else {
        ipt_b_dataBus.style.backgroundColor = 'red';
    }

    if (u_dataBus == '') {
        ipt_u_dataBus.style.backgroundColor = 'white';
    } else if (u_dataBus.toUpperCase() == 'U') {
        ipt_u_dataBus.style.backgroundColor = 'green';
    } else {
        ipt_u_dataBus.style.backgroundColor = 'red';
    }

    // 13. I5
    var cinco_i5 = ipt_cinco_i5.value;

    if (cinco_i5 == '') {
        ipt_cinco_i5.style.backgroundColor = 'white';
    } else if (cinco_i5 == '5') {
        ipt_cinco_i5.style.backgroundColor = 'green';
    } else {
        ipt_cinco_i5.style.backgroundColor = 'red';
    }

    // 14. I7
    var sete_i7 = ipt_sete_i7.value;

    if (sete_i7 == '') {
        ipt_sete_i7.style.backgroundColor = 'white';
    } else if (sete_i7 == '7') {
        ipt_sete_i7.style.backgroundColor = 'green';
    } else {
        ipt_sete_i7.style.backgroundColor = 'red';
    }

    // 15. Dual Core
    var d_dualCore = ipt_d_dualCore.value;
    var u_dualCore = ipt_u_dualCore.value;
    var l_dualCore = ipt_l_dualCore.value;
    var c_dualCore = ipt_c_dualCore.value;
    var r_dualCore = ipt_r_dualCore.value;
    var e_dualCore = ipt_e_dualCore.value;

    if (d_dualCore == '') {
        ipt_d_dualCore.style.backgroundColor = 'white';
    } else if (d_dualCore.toUpperCase() == 'D') {
        ipt_d_dualCore.style.backgroundColor = 'green';
    } else {
        ipt_d_dualCore.style.backgroundColor = 'red';
    }

    if (u_dualCore == '') {
        ipt_u_dualCore.style.backgroundColor = 'white';
    } else if (u_dualCore.toUpperCase() == 'U') {
        ipt_u_dualCore.style.backgroundColor = 'green';
    } else {
        ipt_u_dualCore.style.backgroundColor = 'red';
    }

    if (l_dualCore == '') {
        ipt_l_dualCore.style.backgroundColor = 'white';
    } else if (l_dualCore.toUpperCase() == 'L') {
        ipt_l_dualCore.style.backgroundColor = 'green';
    } else {
        ipt_l_dualCore.style.backgroundColor = 'red';
    }

    if (c_dualCore == '') {
        ipt_c_dualCore.style.backgroundColor = 'white';
    } else if (c_dualCore.toUpperCase() == 'C') {
        ipt_c_dualCore.style.backgroundColor = 'green';
    } else {
        ipt_c_dualCore.style.backgroundColor = 'red';
    }

    if (r_dualCore == '') {
        ipt_r_dualCore.style.backgroundColor = 'white';
    } else if (r_dualCore.toUpperCase() == 'R') {
        ipt_r_dualCore.style.backgroundColor = 'green';
    } else {
        ipt_r_dualCore.style.backgroundColor = 'red';
    }

    if (e_dualCore == '') {
        ipt_e_dualCore.style.backgroundColor = 'white';
    } else if (e_dualCore.toUpperCase() == 'E') {
        ipt_e_dualCore.style.backgroundColor = 'green';
    } else {
        ipt_e_dualCore.style.backgroundColor = 'red';
    }

    // 16. Quad Core
    var q_quadCore = ipt_q_quadCore.value;
    var a_quadCore = ipt_a_quadCore.value;
    var d_quadCore = ipt_d_quadCore.value;
    var c_quadCore = ipt_c_quadCore.value;
    var o_quadCore = ipt_o_quadCore.value;
    var e_quadCore_cache = ipt_e_quadCore_cache.value;

    if (q_quadCore == '') {
        ipt_q_quadCore.style.backgroundColor = 'white';
    } else if (q_quadCore.toUpperCase() == 'Q') {
        ipt_q_quadCore.style.backgroundColor = 'green';
    } else {
        ipt_q_quadCore.style.backgroundColor = 'red';
    }  
    
    if (a_quadCore == '') {
        ipt_a_quadCore.style.backgroundColor = 'white';
    } else if (a_quadCore .toUpperCase()== 'A') {
        ipt_a_quadCore.style.backgroundColor = 'green';
    } else {
        ipt_a_quadCore.style.backgroundColor = 'red';
    } 
    
    if (d_quadCore == '') {
        ipt_d_quadCore.style.backgroundColor = 'white';
    } else if (d_quadCore.toUpperCase() == 'D') {
        ipt_d_quadCore.style.backgroundColor = 'green';
    } else {
        ipt_d_quadCore.style.backgroundColor = 'red';
    }  

    if (c_quadCore == '') {
        ipt_c_quadCore.style.backgroundColor = 'white';
    } else if (c_quadCore.toUpperCase() == 'C') {
        ipt_c_quadCore.style.backgroundColor = 'green';
    } else {
        ipt_c_quadCore.style.backgroundColor = 'red';
    }  
    
    if (o_quadCore == '') {
        ipt_o_quadCore.style.backgroundColor = 'white';
    } else if (o_quadCore .toUpperCase()== 'O') {
        ipt_o_quadCore.style.backgroundColor = 'green';
    } else {
        ipt_o_quadCore.style.backgroundColor = 'red';
    } 
    
    if (e_quadCore_cache == '') {
        ipt_e_quadCore_cache.style.backgroundColor = 'white';
    } else if (e_quadCore_cache.toUpperCase() == 'E') {
        ipt_e_quadCore_cache.style.backgroundColor = 'green';
    } else {
        ipt_e_quadCore_cache.style.backgroundColor = 'red';
    }  
    
    // 17. Threads
    var t_threads = ipt_t_threads.value;
    var h_threads = ipt_h_threads.value;
    var e_threads = ipt_e_threads.value;
    var a_threads = ipt_a_threads.value;
    var d_threads = ipt_d_threads.value;

    if (t_threads == '') {
        ipt_t_threads.style.backgroundColor = 'white';
    } else if (t_threads.toUpperCase() == 'T') {
        ipt_t_threads.style.backgroundColor = 'green';
    } else {
        ipt_t_threads.style.backgroundColor = 'red';
    }

    if (h_threads == '') {
        ipt_h_threads.style.backgroundColor = 'white';
    } else if (h_threads.toUpperCase() == 'H') {
        ipt_h_threads.style.backgroundColor = 'green';
    } else {
        ipt_h_threads.style.backgroundColor = 'red';
    }

    if (e_threads == '') {
        ipt_e_threads.style.backgroundColor = 'white';
    } else if (e_threads.toUpperCase() == 'E') {
        ipt_e_threads.style.backgroundColor = 'green';
    } else {
        ipt_e_threads.style.backgroundColor = 'red';
    }

    if (a_threads == '') {
        ipt_a_threads.style.backgroundColor = 'white';
    } else if (a_threads.toUpperCase() == 'A') {
        ipt_a_threads.style.backgroundColor = 'green';
    } else {
        ipt_a_threads.style.backgroundColor = 'red';
    }

    if (d_threads == '') {
        ipt_d_threads.style.backgroundColor = 'white';
    } else if (d_threads.toUpperCase() == 'D') {
        ipt_d_threads.style.backgroundColor = 'green';
    } else {
        ipt_d_threads.style.backgroundColor = 'red';
    }

    // 18. Cache
    var c_cache = ipt_c_cache.value;
    var a_cache = ipt_a_cache.value;
    var c1_cache = ipt_c1_cache.value;
    var h_cache = ipt_h_cache.value;

    if (c_cache == '') {
        ipt_c_cache.style.backgroundColor = 'white';
    } else if (c_cache.toUpperCase() == 'C') {
        ipt_c_cache.style.backgroundColor = 'green';
    } else {
        ipt_c_cache.style.backgroundColor = 'red';
    }

    if (a_cache == '') {
        ipt_a_cache.style.backgroundColor = 'white';
    } else if (a_cache.toUpperCase() == 'A') {
        ipt_a_cache.style.backgroundColor = 'green';
    } else {
        ipt_a_cache.style.backgroundColor = 'red';
    }

    if (c1_cache == '') {
        ipt_c1_cache.style.backgroundColor = 'white';
    } else if (c1_cache.toUpperCase() == 'C') {
        ipt_c1_cache.style.backgroundColor = 'green';
    } else {
        ipt_c1_cache.style.backgroundColor = 'red';
    }

    if (h_cache == '') {
        ipt_h_cache.style.backgroundColor = 'white';
    } else if (h_cache.toUpperCase() == 'H') {
        ipt_h_cache.style.backgroundColor = 'green';
    } else {
        ipt_h_cache.style.backgroundColor = 'red';
    }


    // Verificando se já venceu
    if (
        c_cpu_cs.toUpperCase() == 'C' && p_cpu.toUpperCase() == 'P' && u_cpu.toUpperCase() == 'U' && u_ula_quad.toUpperCase() == 'U' && l_ula.toUpperCase() == 'L' && 
        a_ula_flash.toUpperCase() == 'A' && r_reg.toUpperCase() == 'R' && e_reg.toUpperCase() == 'E' && g_reg.toUpperCase() == 'G' &&
        i_reg_i5.toUpperCase() == 'I' && s_reg_threads.toUpperCase() == 'S' && t_reg.toUpperCase() == 'T' &&
        r2_reg.toUpperCase() == 'R' && a_reg_dma.toUpperCase() == 'A' && d_reg.toUpperCase() == 'D' &&
        o_reg.toUpperCase() == 'O' && r3_reg.toUpperCase() == 'R' && e2_reg.toUpperCase() == 'E' && s_reg.toUpperCase() == 'S' &&
        r_ram.toUpperCase() == 'R' && a_ram_dataBus.toUpperCase() == 'A' && m_ram_eprom.toUpperCase() == 'M' &&
        r_rom_threads.toUpperCase() == 'R' && o_rom_dualCore.toUpperCase() == 'O' && m_rom.toUpperCase() == 'M' &&
        e_eprom.toUpperCase() == 'E' && p_eprom.toUpperCase() == 'P' && r_eprom_quadCore.toUpperCase() == 'R' &&
        o_eprom.toUpperCase() == 'O' && m_ram_eprom.toUpperCase() == 'M' && f_flash.toUpperCase() == 'F' && l_flash.toUpperCase() == 'L' && 
        a_ula_flash.toUpperCase() == 'A'&& s_flash_cs.toUpperCase() == 'S' && h_flash.toUpperCase() == 'H' && 
        m_memoriaDeMassa.toUpperCase() == 'M' && e_memoriaDeMassa.toUpperCase() == 'E' &&
        m1_memoriaDeMassa.toUpperCase() == 'M' && o_memoriaDeMassa.toUpperCase() == 'O' &&
        r_memoriaDeMassa.toUpperCase() == 'R' && i_memoriaDeMassa_i7.toUpperCase() == 'I' &&
        a_memoriaDeMassa.toUpperCase() == 'A' && d_memoriaDeMassa.toUpperCase() == 'D' &&
        e1_memoriaDeMassa.toUpperCase() == 'E' && m2_memoriaDeMassa.toUpperCase() == 'M' &&
        a1_memoriaDeMassa_dualCore.toUpperCase() == 'A' && s_memoriaDeMassa_addressBus.toUpperCase() == 'S' &&
        s1_memoriaDeMassa.toUpperCase() == 'S' && a2_memoriaDeMassa.toUpperCase() == 'A' && 
        d_dma.toUpperCase() == 'D' && m_dma.toUpperCase() == 'M' && a_reg_dma.toUpperCase() == 'A' && c_cpu_cs.toUpperCase() == 'C' && s_flash_cs.toUpperCase() == 'S' &&
        a_addressBus.toUpperCase() == 'A' && d_addressBus.toUpperCase() == 'D' && d1_addressBus.toUpperCase() == 'D' &&
        r_addressBus.toUpperCase() == 'R' && e_addressBus.toUpperCase() == 'E' && s_addressBus.toUpperCase() == 'S' &&
        s1_addressBus_dataBus.toUpperCase() == 'S' && b_addressBus.toUpperCase() == 'B' && u_addressBus.toUpperCase() == 'U' &&
        s_memoriaDeMassa_addressBus.toUpperCase() == 'S' && d_dataBus.toUpperCase() == 'D' && a_ram_dataBus.toUpperCase() == 'A' 
        && t_dataBus.toUpperCase() == 'T' && a1_dataBus.toUpperCase() == 'A' && b_dataBus.toUpperCase() == 'B' && u_dataBus.toUpperCase() == 'U' && 
        s1_addressBus_dataBus.toUpperCase() == 'S' && i_reg_i5.toUpperCase() == 'I' && cinco_i5.toUpperCase() == '5' &&
        i_memoriaDeMassa_i7.toUpperCase() == 'I' && sete_i7.toUpperCase() == '7' && d_dualCore.toUpperCase() == 'D' && u_dualCore.toUpperCase() == 'U' 
        && a1_memoriaDeMassa_dualCore.toUpperCase() == 'A' && l_dualCore.toUpperCase() == 'L' && c_dualCore.toUpperCase() == 'C' && 
        o_rom_dualCore.toUpperCase() == 'O' && r_dualCore.toUpperCase() == 'R' && e_dualCore.toUpperCase() == 'E' &&
        q_quadCore.toUpperCase() == 'Q' && u_ula_quad.toUpperCase() == 'U' && a_quadCore.toUpperCase() == 'A' &&
        d_quadCore.toUpperCase() == 'D' && c_quadCore.toUpperCase() == 'C' && o_quadCore.toUpperCase() == 'O' &&
        r_eprom_quadCore.toUpperCase() == 'R' && e_quadCore_cache.toUpperCase() == 'E' && 
        t_threads.toUpperCase() == 'T' && h_threads.toUpperCase() == 'H' && r_rom_threads.toUpperCase() == 'R' &&
        e_threads.toUpperCase() == 'E' && a_threads.toUpperCase() == 'A' && d_threads.toUpperCase() == 'D' && s_reg_threads.toUpperCase() == 'S' &&
        c_cache.toUpperCase() == 'C' && a_cache.toUpperCase() == 'A' && c1_cache.toUpperCase() == 'C' && h_cache.toUpperCase() == 'H' && e_quadCore_cache.toUpperCase() == 'E'
    ) {
        Swal.fire({
            title: 'Parabéns, você ganhou o jogo!!!',
            width: 600,
            padding: '3em',
            color: '#716add',
            background: '#fff url(/images/trees.png)',
            backdrop: `
              rgba(0,0,123,0.4)
              url("https://66.media.tumblr.com/8210fd413c5ce209678ef82d65731443/tumblr_mjphnqLpNy1s5jjtzo1_400.gifv")
              left top
              no-repeat
            `
        });
    }
}